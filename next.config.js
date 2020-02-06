const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const fs = require('fs');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
          env: 'dev',
          baseUrl: 'http://localhost:3000'
      },
      exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        let blogMap = {}
        await fs.readdir(`${dir}/public/content/`, (err, files) => {
            console.log(files)
            files.forEach(file => {
                let cleanFile = file.slice(0, -5);
                blogMap['/blog/' + cleanFile] = { page: '/blog/[id]', query: { id: cleanFile} }
            })
        })
        return blogMap;
      }
    }
  }

    return {
        /* config options for all phases except development here */
        env: {
            env: 'prod',
            baseUrl: 'https://netlify--boring-bhaskara-4998bb.netlify.com'
        },
        exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
            let blogMap = {}
            await fs.readdir(`${dir}/public/content/`, (err, files) => {
                console.log(files)
                files.forEach(file => {
                    let cleanFile = file.slice(0, -5);
                    blogMap['/blog/' + cleanFile] = { page: '/blog/[id]', query: { id: cleanFile} }
                })
            })
            return blogMap;
          }
    }
}