import Head from 'next/head';

import fetch from 'isomorphic-unfetch';

function Post(props) {
    if (props.data.title) {
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
    let data = {};
    if (query.id) {
        const res = await fetch(`http://localhost:3000/content/${query.id}.json`);
        data = await res.json();
    }
  
    console.log(`Data fetched. Count: ${data}`);
  
    return {
      data
    };
  };
  

export default Post;