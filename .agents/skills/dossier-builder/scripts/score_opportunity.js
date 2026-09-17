function calculateScores(scores) {
  const business = Number(scores.business || 5);
  const design = Number(scores.design || 5);
  const mobile = Number(scores.mobile || 5);
  const ux = Number(scores.ux || 5);
  const conversion = Number(scores.conversion || 5);
  const confidence = Number(scores.confidence || 5);
  const performance = Number(scores.performance || 5);
  const seo = Number(scores.seo || 5);

  // Weighted Website Score (0 - 10)
  // Mobile, Conversion, Design and UX have highest commercial weight
  const weights = {
    mobile: 0.25,
    conversion: 0.20,
    design: 0.20,
    ux: 0.15,
    performance: 0.10,
    confidence: 0.05,
    seo: 0.05
  };

  const websiteOverall = Number((
    (mobile * weights.mobile) +
    (conversion * weights.conversion) +
    (design * weights.design) +
    (ux * weights.ux) +
    (performance * weights.performance) +
    (confidence * weights.confidence) +
    (seo * weights.seo)
  ).toFixed(1));

  // Opportunity Score (0 to 100)
  // Max opportunity when Business is 10 and Website is 0.
  // Formula: Business * (10 - Website) * 1.25, bounded [0, 100]
  const gap = Math.max(0, 10 - websiteOverall);
  let opportunity = Math.round(business * gap * 1.15);
  if (opportunity > 100) opportunity = 100;
  if (opportunity < 0) opportunity = 0;

  let classification = 'BAIXA';
  if (opportunity >= 70) classification = 'ALTA';
  else if (opportunity >= 45) classification = 'MÉDIA';

  return {
    business_score: business,
    website_overall: websiteOverall,
    opportunity_score: opportunity,
    classification: classification,
    breakdown: { design, mobile, ux, conversion, confidence, performance, seo }
  };
}

if (require.main === module) {
  const inputArg = process.argv[2];
  if (inputArg) {
    try {
      const data = JSON.parse(inputArg);
      console.log(JSON.stringify(calculateScores(data), null, 2));
    } catch (e) {
      console.error('Argumento precisa ser um JSON válido');
    }
  } else {
    // Example test
    console.log('--- TESTE DO CÁLCULO DE OPORTUNIDADE ---');
    const sample = {
      business: 8.5,
      design: 4.0,
      mobile: 3.0,
      ux: 4.5,
      conversion: 3.5,
      confidence: 6.0,
      performance: 3.5,
      seo: 5.0
    };
    console.log('Input:', sample);
    console.log('Resultado:', calculateScores(sample));
  }
}

module.exports = { calculateScores };