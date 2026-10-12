module.exports = {
  ci: {
    collect: {
      url: ['https://autofix-workshop.netlify.app/'],
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