const fs = require('fs');

const report = JSON.parse(fs.readFileSync('mochawesome.json', 'utf-8'));

report.results.forEach((suite) => {
  suite.suites?.forEach((subSuite) => {
    subSuite.tests?.forEach((test) => {
      delete test.isRoot;
    });
  });

  suite.tests?.forEach((test) => {
    delete test.isRoot;
  });
});

fs.writeFileSync('mochawesome-fixed.json', JSON.stringify(report, null, 2));

console.log('✅ Rapport corrigé et sauvegardé sous mochawesome-fixed.json');