module.exports = {
  ci: {
    collect: {
      url: ['https://Hashim-rajahh.github.io/Autofix-workshop/'],
      numberOfRuns: 3
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-reports'
    },
        assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.9 }]
      }
    }
  }
};