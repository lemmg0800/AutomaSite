import fs from 'fs';
import path from 'path';

export interface LeadDossier {
  slug: string;
  leadJson: any;
  auditoriaMd: string | null;
  pagespeedJson: any | null;
  builderHandoff: any | null;
  relatorioMd: string | null;
  commercialSummaryMd: string | null;
  emailMd: string | null;
  whatsappMd: string | null;
  whatsappPointsMd: string | null;
  objectionsMd: string | null;
  evidenceJson: any | null;
  assets: {
    beforeDesktop: string | null;
    beforeMobile: string | null;
    afterDesktop: string | null;
    afterMobile: string | null;
    comparisonShot: string | null;
  };
}

export function getLeadDossier(slug: string): LeadDossier | null {
  const rootDir = process.cwd();
  const leadDir = path.join(rootDir, 'leads', slug);
  const leadJsonPath = path.join(leadDir, 'lead.json');

  if (!fs.existsSync(leadJsonPath)) {
    return null;
  }

  const readFileSafely = (p: string) => {
    if (fs.existsSync(p)) {
      try {
        return fs.readFileSync(p, 'utf8');
      } catch (e) {
        return null;
      }
    }
    return null;
  };

  const readJsonSafely = (p: string) => {
    const content = readFileSafely(p);
    if (content) {
      try {
        return JSON.parse(content.replace(/^\uFEFF/, ''));
      } catch (e) {
        return null;
      }
    }
    return null;
  };

  const checkAsset = (relPath: string) => {
    const full = path.join(leadDir, relPath);
    if (fs.existsSync(full)) {
      return `/api/lead-asset/${slug}/${relPath}`;
    }
    return null;
  };

  return {
    slug,
    leadJson: readJsonSafely(leadJsonPath),
    auditoriaMd: readFileSafely(path.join(leadDir, 'auditoria.md')),
    pagespeedJson: readJsonSafely(path.join(leadDir, 'pagespeed.json')),
    builderHandoff: readJsonSafely(path.join(leadDir, 'redesign/builder-handoff.json')),
    relatorioMd: readFileSafely(path.join(leadDir, 'redesign/relatorio.md')),
    commercialSummaryMd: readFileSafely(path.join(leadDir, 'commercial/commercial-summary.md')),
    emailMd: readFileSafely(path.join(leadDir, 'commercial/email.md')),
    whatsappMd: readFileSafely(path.join(leadDir, 'commercial/whatsapp.md')),
    whatsappPointsMd: readFileSafely(path.join(leadDir, 'commercial/whatsapp-points.md')),
    objectionsMd: readFileSafely(path.join(leadDir, 'commercial/objections.md')),
    evidenceJson: readJsonSafely(path.join(leadDir, 'commercial/evidence.json')),
    assets: {
      beforeDesktop: checkAsset('screenshots/site-desktop.png'),
      beforeMobile: checkAsset('screenshots/site-mobile.png'),
      afterDesktop: checkAsset('redesign/screenshots/home-desktop.png'),
      afterMobile: checkAsset('redesign/screenshots/home-mobile.png'),
      comparisonShot: checkAsset('commercial/visual/before-after.png')
    }
  };
}

export function formatDossierForDashboard(d: LeadDossier) {
  const lj = d.leadJson || {};
  const biz = lj.business || lj.empresa || {};
  const ps = d.pagespeedJson || {};
  const bh = d.builderHandoff || {};
  const contacts = lj.contatos || {};

  // Parse email subject and body if available
  let emailSubject = 'Apresentação de Redesign Institucional';
  let emailBody = d.emailMd || '';
  if (d.emailMd && d.emailMd.includes('Assunto:')) {
    const lines = d.emailMd.split('\n');
    const subjLine = lines.find(l => l.startsWith('Assunto:'));
    if (subjLine) {
      emailSubject = subjLine.replace('Assunto:', '').trim();
      emailBody = lines.filter(l => !l.startsWith('Assunto:')).join('\n').trim();
    }
  }

  // Parse whatsapp options
  let wspOptA = '';
  let wspOptB = '';
  if (d.whatsappMd) {
    if (d.whatsappMd.includes('---')) {
      const parts = d.whatsappMd.split('---');
      wspOptA = parts[0] ? parts[0].trim() : '';
      wspOptB = parts[1] ? parts[1].trim() : '';
    } else {
      wspOptA = d.whatsappMd.trim();
    }
  }

  return {
    slug: d.slug,
    name: biz.name || biz.nome || d.slug,
    niche: biz.niche || biz.nicho || 'Geral',
    city: biz.city || biz.cidade || 'Florianópolis',
    state: biz.state || biz.uf || 'SC',
    status: lj.status || 'ativo',
    isPublished: lj.status === 'published' || lj.status === 'ativo',
    pipeline: {
      prospector: true,
      builder: !!d.builderHandoff || !!d.assets.afterDesktop,
      comercial: !!d.emailMd || !!d.whatsappMd
    },
    prospector: {
      score: lj.score || lj.pontuacao || '8.5',
      pagespeedMobile: ps.mobileScore || ps.performance || 45,
      mainGap: lj.mainGap || lj.gargaloPrincipal || 'Baixa velocidade mobile e layout desatualizado.',
      auditoriaMarkdown: d.auditoriaMd || '',
      originalDesktopScreenshot: d.assets.beforeDesktop,
      originalMobileScreenshot: d.assets.beforeMobile
    },
    builder: {
      redesignDesktopScreenshot: d.assets.afterDesktop,
      redesignMobileScreenshot: d.assets.afterMobile,
      componentsUsed: bh.componentsUsed || ['Hero01', 'Benefits01', 'Services01', 'Footer01']
    },
    comercial: {
      beforeAfterImage: d.assets.comparisonShot,
      emailSubject: emailSubject,
      emailBody: emailBody,
      whatsappOptionA: wspOptA,
      whatsappOptionB: wspOptB,
      whatsappPocketPoints: d.whatsappPointsMd || '',
      objectionsMarkdown: d.objectionsMd || ''
    },
    contacts: {
      phone: biz.phone || contacts.telefone || biz.telefone || '',
      whatsapp: biz.whatsapp || contacts.whatsapp || biz.whatsapp || '',
      email: biz.email || contacts.email || biz.email || '',
      instagram: biz.instagram || contacts.instagram || '',
      address: biz.address || biz.endereco || '',
      website: lj.url || biz.website || ''
    }
  };
}

export function getAllLeadDossiers() {
  const rootDir = process.cwd();
  const leadsDir = path.join(rootDir, 'leads');
  if (!fs.existsSync(leadsDir)) return [];

  const dirs = fs.readdirSync(leadsDir).filter(f => {
    return fs.statSync(path.join(leadsDir, f)).isDirectory();
  });

  return dirs
    .map(slug => getLeadDossier(slug))
    .filter((d): d is LeadDossier => d !== null)
    .map(d => formatDossierForDashboard(d));
}
