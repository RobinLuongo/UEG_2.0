import Head from 'next/head';

import fetch from 'isomorphic-unfetch';

function Post(props) {
    if (props.data != '') {
        return (
            <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <article>
                <h1>{props.data.title}</h1>
            </article>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

Post.getInitialProps = async function({query}) {
    const res = await fetch(`http://localhost:3000/content/${query.id}.json`);
    const data = query.id ? await res.json() : ''
  
    console.log(`Data fetched. Count: ${data}`);
  
    return {
      data
    };
  };
  

export default Post;