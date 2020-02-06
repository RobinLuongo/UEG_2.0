const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const fs = require('fs').promises;

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
        let files = await fs.readdir(`${dir}/public/content/`);
        for (let file of files) {
            let cleanFile = file.slice(0, -5);
            let contents = await fs.readFile(`${dir}/public/content/${file}`)
            blogMap['/blog/' + cleanFile] = { page: '/blog/post', query: { id: cleanFile, data: JSON.parse(contents.toString())} }
        }
        console.log(blogMap)
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
            let files = await fs.readdir(`${dir}/public/content/`);
            for (let file of files) {
                let cleanFile = file.slice(0, -5);
                let contents = await fs.readFile(`${dir}/public/content/${file}`)
                blogMap['/blog/' + cleanFile] = { page: '/blog/post', query: { id: cleanFile, data: JSON.parse(contents.toString())} }
            }
            console.log(blogMap)
            return blogMap;
          }
    }
}