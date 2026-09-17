import fs from 'fs';
import path from 'path';
import { getAllClients } from '../clients/registry';

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
  try {
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
  } catch (err) {
    console.error(`Erro ao carregar dossiê para ${slug}:`, err);
    return null;
  }
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

  const rawCity = lj.city || biz.city || biz.cidade || 'Florianópolis';
  const cleanCity = rawCity.replace(/\s*-\s*SC$/, '').trim();

  return {
    slug: d.slug,
    name: lj.name || biz.name || biz.nome || d.slug,
    niche: lj.segment || lj.niche || biz.niche || biz.nicho || 'Geral',
    city: cleanCity,
    state: lj.state || biz.state || biz.uf || 'SC',
    ranking: lj.ranking || 999,
    score: lj.scores?.opportunity || lj.score || lj.pontuacao || 0,
    status: lj.status || 'ativo',
    isPublished: lj.status === 'published' || lj.status === 'ativo',
    pipeline: {
      prospector: true,
      builder: !!d.builderHandoff || !!d.assets.afterDesktop || !!d.relatorioMd,
      comercial: !!d.emailMd || !!d.whatsappMd || !!d.commercialSummaryMd
    },
    prospector: {
      score: lj.scores?.opportunity || lj.score || lj.pontuacao || '8.5',
      pagespeedMobile: lj.pagespeed?.mobile_performance || ps.mobileScore || ps.performance || 45,
      mainGap: lj.main_gap || lj.mainGap || lj.gargaloPrincipal || 'Baixa velocidade mobile e layout desatualizado.',
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
      phone: lj.phone || biz.phone || contacts.telefone || biz.telefone || '',
      whatsapp: lj.whatsapp || biz.whatsapp || contacts.whatsapp || biz.whatsapp || '',
      email: lj.email || biz.email || contacts.email || biz.email || '',
      instagram: lj.instagram || biz.instagram || contacts.instagram || '',
      address: lj.address || biz.address || biz.endereco || '',
      website: lj.website || lj.url || biz.website || ''
    }
  };
}

export async function getAllLeadDossiers() {
  let dossiers: any[] = [];

  try {
    const rootDir = process.cwd();
    const leadsDir = path.join(rootDir, 'leads');
    if (fs.existsSync(leadsDir)) {
      const dirs = fs.readdirSync(leadsDir).filter(f => {
        try {
          return fs.statSync(path.join(leadsDir, f)).isDirectory();
        } catch {
          return false;
        }
      });

      dossiers = dirs
        .map(slug => getLeadDossier(slug))
        .filter((d): d is LeadDossier => d !== null)
        .map(d => formatDossierForDashboard(d));
    }
  } catch (err) {
    console.error('Erro ao ler diretório de leads:', err);
  }

  // Fallback resiliente para Vercel Serverless (carrega clientes estáticos compilados em src/clients/data/)
  if (dossiers.length === 0) {
    try {
      const clients = await getAllClients();
      dossiers = clients.map(c => ({
        slug: c.slug,
        name: c.business?.name || c.slug,
        niche: c.business?.niche || 'Geral',
        city: c.business?.city || 'Florianópolis',
        state: c.business?.state || 'SC',
        status: c.status || 'ativo',
        isPublished: true,
        pipeline: { prospector: true, builder: true, comercial: true },
        prospector: {
          score: '9.0',
          pagespeedMobile: 90,
          mainGap: 'Demonstração ativa na plataforma.',
          auditoriaMarkdown: 'Auditoria concluída com sucesso.',
          originalDesktopScreenshot: null,
          originalMobileScreenshot: null
        },
        builder: {
          redesignDesktopScreenshot: null,
          redesignMobileScreenshot: null,
          componentsUsed: c.pages?.[0]?.sections?.map(s => s.variant) || []
        },
        comercial: {
          beforeAfterImage: null,
          emailSubject: `Proposta de Redesign - ${c.business?.name}`,
          emailBody: `Olá equipe ${c.business?.name},\n\nPreparamos uma demonstração do seu novo site institucional.`,
          whatsappOptionA: `Olá! Montei um novo demonstrativo para a ${c.business?.name}. Pode dar uma olhada?`,
          whatsappOptionB: `Olá! Notei algumas oportunidades de melhoria no site da ${c.business?.name} e criei uma versão redesenhada.`,
          whatsappPocketPoints: '- Design moderno e responsivo\n- Alta velocidade de carregamento',
          objectionsMarkdown: '- Objeção de Preço: Retorno rápido sobre o investimento.'
        },
        contacts: {
          phone: c.business?.phone || '',
          whatsapp: c.business?.whatsapp || '',
          email: c.business?.email || '',
          instagram: c.business?.instagram || '',
          address: c.business?.address || '',
          website: ''
        }
      }));
    } catch (fallbackErr) {
      console.error('Erro no fallback de clientes:', fallbackErr);
    }
  }

  return dossiers;
}
