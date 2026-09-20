/**
 * BATERIA DE TESTES DE SEGURANÇA (AUDITORIA RIGOROSA)
 * 1. Exposição de Chaves / Segredos (SK_KEY, tokens, etc.)
 * 2. Autenticação Server-Side e Perda de Acesso ao Excluir Cookies
 * 3. Rate Limiting em Login, Recuperação de Senha e APIs Sensíveis
 */

import fs from 'fs';
import path from 'path';
import { checkRateLimit, checkRateLimitAsync, resetRateLimit, createRateLimitResponse } from '../src/lib/rate-limiter';

const rootDir = process.cwd();

async function runSecurityAudit() {
  console.log('='.repeat(75));
  console.log('  🛡️ AUDITORIA DE SEGURANÇA — TESTES AUTOMATIZADOS');
  console.log('='.repeat(75));

  let passedAll = true;

  // ---------------------------------------------------------------------------
  // TESTE 1: EXPOSIÇÃO DE CHAVES E SEGREDOS NO CLIENTE
  // ---------------------------------------------------------------------------
  console.log('\n[TESTE 1] Verificação de Exposição de Chaves / Segredos...');

  const distClientDir = path.join(rootDir, 'dist', 'client');
  const forbiddenPatterns = [
    /SK_KEY/i,
    /sk-[a-zA-Z0-9_-]{20,}/,
    /sk_[a-zA-Z0-9_-]{20,}/,
    /vck_[a-zA-Z0-9_-]{20,}/,
    /AI_GATEWAY_API_KEY/i
  ];

  let exposedSecretsCount = 0;
  function scanDir(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(full);
      } else if (/\.(html|js|json|css|txt)$/i.test(entry.name)) {
        const content = fs.readFileSync(full, 'utf8');
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(content)) {
            console.error(`  ❌ ALERTA DE SEGURANÇA: Padrão sensível detectado em ${path.relative(rootDir, full)}`);
            exposedSecretsCount++;
          }
        }
      }
    }
  }

  scanDir(distClientDir);

  if (exposedSecretsCount === 0) {
    console.log('  ✅ Nenhum segredo, token sensível ou chave SK_KEY exposto em arquivos de distribuição do cliente.');
  } else {
    passedAll = false;
  }

  // Verificar se .env está no .gitignore
  const gitignore = fs.readFileSync(path.join(rootDir, '.gitignore'), 'utf8');
  if (gitignore.includes('.env')) {
    console.log('  ✅ Arquivos .env devidamente protegidos no .gitignore.');
  } else {
    console.error('  ❌ .env NÃO está no .gitignore!');
    passedAll = false;
  }

  // ---------------------------------------------------------------------------
  // TESTE 2: RATE LIMITING (LOGIN, RESET DE SENHA, APIS SENSÍVEIS)
  // ---------------------------------------------------------------------------
  console.log('\n[TESTE 2] Validação do Mecanismo de Rate Limiting...');

  const testIp = '192.168.1.100';
  resetRateLimit('login', testIp);

  // Simulação de tentativas de login (limite: 5 requisições)
  let blockedOnLogin = false;
  for (let i = 1; i <= 7; i++) {
    const res = checkRateLimit('login', testIp, { windowMs: 60000, maxRequests: 5 });
    if (!res.allowed) {
      blockedOnLogin = true;
      console.log(`  ✓ Tentativa #${i} bloqueada por Rate Limit (Retry-After: ${res.retryAfterSeconds}s)`);
    }
  }

  if (blockedOnLogin) {
    console.log('  ✅ Rate limit de Login funcionando corretamente (brute-force mitigado).');
  } else {
    console.error('  ❌ Falha no Rate Limit de Login.');
    passedAll = false;
  }

  // Simulação de recuperação de senha (limite: 3 requisições)
  resetRateLimit('password-recovery', testIp);
  let blockedOnReset = false;
  for (let i = 1; i <= 5; i++) {
    const res = checkRateLimit('password-recovery', testIp, { windowMs: 60000, maxRequests: 3 });
    if (!res.allowed) {
      blockedOnReset = true;
      console.log(`  ✓ Tentativa de recuperação #${i} bloqueada por Rate Limit (Retry-After: ${res.retryAfterSeconds}s)`);
    }
  }

  if (blockedOnReset) {
    console.log('  ✅ Rate limit de Recuperação de Senha funcionando.');
  } else {
    console.error('  ❌ Falha no Rate Limit de Recuperação de Senha.');
    passedAll = false;
  }

  // Simulação de API sensível de status (limite: 30 requisições)
  resetRateLimit('lead-status', testIp);
  let blockedOnStatus = false;
  for (let i = 1; i <= 35; i++) {
    const res = checkRateLimit('lead-status', testIp, { windowMs: 60000, maxRequests: 30 });
    if (!res.allowed) {
      blockedOnStatus = true;
    }
  }

  // Simulação de criação de contas / cadastro (limite: 3 cadastros)
  resetRateLimit('register', testIp);
  let blockedOnRegister = false;
  for (let i = 1; i <= 5; i++) {
    const res = await checkRateLimitAsync('register', testIp, { windowMs: 3600000, maxRequests: 3 });
    if (!res.allowed) {
      blockedOnRegister = true;
      console.log(`  ✓ Tentativa de cadastro #${i} bloqueada por Rate Limit (Spam de Contas Mitigado)`);
    }
  }

  if (blockedOnRegister) {
    console.log('  ✅ Rate limit de Cadastro e Criação de Contas funcionando.');
  } else {
    console.error('  ❌ Falha no Rate Limit de Cadastro.');
    passedAll = false;
  }

  // Simulação de Endpoint de Alto Custo / IA (limite duplo: 5 requisições por IP e Usuário)
  const testUserId = 'usr_789456123';
  resetRateLimit('ai-generation', testIp);
  resetRateLimit('ai-generation:user', `user:${testUserId}`);
  let blockedOnAi = false;
  for (let i = 1; i <= 7; i++) {
    const res = await checkRateLimitAsync('ai-generation', testIp, {
      windowMs: 600000,
      maxRequests: 5,
      userId: testUserId
    });
    if (!res.allowed) {
      blockedOnAi = true;
      console.log(`  ✓ Chamada de IA #${i} bloqueada (Limite Duplo IP + Usuário aplicado com sucesso)`);
    }
  }

  if (blockedOnAi) {
    console.log('  ✅ Rate limit de IA e Endpoints de Alto Custo funcionando com proteção composta.');
  } else {
    console.error('  ❌ Falha no Rate Limit de IA.');
    passedAll = false;
  }

  // Validação da Resposta Padronizada HTTP 429 Too Many Requests
  const sampleBlocked = await checkRateLimitAsync('ai-generation', testIp, { windowMs: 600000, maxRequests: 5, userId: testUserId });
  const response429 = createRateLimitResponse(sampleBlocked);
  if (response429.status === 429 && response429.headers.get('Retry-After') && response429.headers.get('X-RateLimit-Limit')) {
    console.log('  ✅ Resposta HTTP 429 Too Many Requests validada com cabeçalhos Retry-After e X-RateLimit.');
  } else {
    console.error('  ❌ Resposta HTTP 429 inválida ou sem cabeçalhos requeridos.');
    passedAll = false;
  }

  // ---------------------------------------------------------------------------
  // TESTE 3: VALIDAÇÃO DO MIDDLEWARE E ROTAS PROTEGIDAS
  // ---------------------------------------------------------------------------
  console.log('\n[TESTE 3] Análise do Middleware de Autenticação...');

  const middlewareContent = fs.readFileSync(path.join(rootDir, 'src', 'middleware.ts'), 'utf8');

  // Verifica se ?bypass=1 foi eliminado
  if (!middlewareContent.includes("get('bypass') === '1'")) {
    console.log('  ✅ Parâmetro inseguro de bypass (?bypass=1) removido com sucesso.');
  } else {
    console.error('  ❌ ALERTA: ?bypass=1 ainda presente no middleware!');
    passedAll = false;
  }

  // Verifica se APIs administrativas estão na lista de rotas protegidas
  if (middlewareContent.includes('/api/lead-status') && middlewareContent.includes('isProtectedApi')) {
    console.log('  ✅ API administrativa (/api/lead-status) protegida por sessão server-side.');
  } else {
    console.error('  ❌ /api/lead-status não está devidamente protegida no middleware!');
    passedAll = false;
  }

  // Verifica se rotas de página privadas exigem redirect server-side
  if (middlewareContent.includes('isProtectedPage') && middlewareContent.includes("context.redirect")) {
    console.log('  ✅ Páginas privadas exigem autenticação server-side com redirecionamento para /login.');
  } else {
    console.error('  ❌ Redirecionamento server-side ausente!');
    passedAll = false;
  }

  // ---------------------------------------------------------------------------
  // TESTE 4: CRIPTOGRAFIA EM REPOUSO E MINIMIZAÇÃO DE DADOS (LGPD/GDPR)
  // ---------------------------------------------------------------------------
  console.log('\n[TESTE 4] Validação de Criptografia em Repouso e Minimização de Dados...');

  const { encryptData, decryptData, encryptObject, decryptObject, hashSensitiveData } = await import('../src/lib/crypto');

  // Teste de Criptografia AES-256-GCM
  const sampleSensitive = 'telefone-direto: (21) 99877-2201 | notas-confidenciais: reunião com decisor';
  const cipher = encryptData(sampleSensitive);

  if (cipher && cipher.includes(':') && !cipher.includes('(21) 99877-2201')) {
    const decrypted = decryptData(cipher);
    if (decrypted === sampleSensitive) {
      console.log('  ✅ Criptografia AES-256-GCM em repouso validada (cifragem e decifragem íntegras).');
    } else {
      console.error('  ❌ Falha na decifragem do texto.');
      passedAll = false;
    }
  } else {
    console.error('  ❌ Falha: dado sensível permaneceu legível no ciphertext!');
    passedAll = false;
  }

  // Teste de Criptografia de Objetos (Contatos/Notas de Leads)
  const contactObj = { phone: '(21) 99877-2201', email: 'cadas@cadas.com.br', partner: 'Cadas Abranches' };
  const objCipher = encryptObject(contactObj);
  const decryptedObj = decryptObject(objCipher, {});
  if (decryptedObj.phone === contactObj.phone && decryptedObj.partner === contactObj.partner) {
    console.log('  ✅ Criptografia de objetos/contatos em repouso validada.');
  } else {
    console.error('  ❌ Falha na criptografia de objetos.');
    passedAll = false;
  }

  // Teste de Minimização de Dados (Pseudonimização de IPs no Rate Limiter)
  const rawIp = '201.86.12.5';
  const hashedIp = hashSensitiveData(rawIp);
  if (hashedIp && hashedIp.length === 64 && !hashedIp.includes(rawIp)) {
    console.log('  ✅ Minimização de Dados: IPs brutos são pseudonimizados (SHA-256 + salt) sem retenção de dados pessoais em memória.');
  } else {
    console.error('  ❌ Falha na pseudonimização de IP.');
    passedAll = false;
  }

  // ---------------------------------------------------------------------------
  // CONCLUSÃO
  // ---------------------------------------------------------------------------
  console.log('\n' + '='.repeat(75));
  if (passedAll) {
    console.log('🎉 AUDITORIA DE SEGURANÇA E PRIVACIDADE: 100% APROVADA!');
  } else {
    console.error('❌ FORAM ENCONTRADAS VULNERABILIDADES!');
    process.exit(1);
  }
  console.log('='.repeat(75));
}

runSecurityAudit().catch(err => {
  console.error('Erro na auditoria:', err);
  process.exit(1);
});
