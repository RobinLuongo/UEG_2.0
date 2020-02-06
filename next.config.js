const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
          env: 'dev',
          baseUrl: 'http://localhost:3000'
      }
    }
  }

  return {
    /* config options for all phases except development here */
    env: {
        env: 'prod',
        baseUrl: 'https://netlify--boring-bhaskara-4998bb.netlify.com'
    }
  }
}