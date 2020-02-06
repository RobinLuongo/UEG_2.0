import Head from 'next/head';

import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';

import theme from '../../components/theme'

function Post(props) {
    if (props.data.title) {
        return (
            <>
                <Head>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>
                <article>
                    <h1 className="blog-title">{props.data.title}</h1>
                    <div className="dateline">by {props.data.author} on {props.data.date}</div>
                    <ReactMarkdown source={props.data.body} className="blog-content"/>
                </article>
                <style jsx>{`
                    article {
                        margin: auto;
                        width: 900px;
                    }
                    .blog-title {
                        font-size: 40px;
                        color: ${theme.colors["dark-blue"]};
                        margin-bottom: 5px;
                    }
                    .dateline {
                        
                    }
                    .blog-content {
                        margin-top: 20px;
                    }
                `}</style>
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