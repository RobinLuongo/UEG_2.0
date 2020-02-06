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
                    <div className="br"></div>
                    <ReactMarkdown source={props.data.body} className="blog-content"/>
                </article>
                <style>{`
                    article {
                        margin: auto;
                        max-width: 800px;
                    }
                    .blog-title {
                        font-size: 46px;
                        color: ${theme.colors["dark-blue"]};
                        margin-bottom: 5px;
                    }
                    .dateline {
                        
                    }
                    .br {
                        border-bottom: 2px solid #80808057;
                        margin: 10px 0px;
                    }
                    .blog-content {
                        margin-top: 20px;
                    }
                    .blog-content > h1 {
                        font-size: 34px;
                        color: ${theme.colors["reg-blue"]};
                    }
                    .blog-content > h2 {
                        font-size: 26px;
                        color: ${theme.colors["reg-blue"]};
                    }
                    .blog-content > p {
                        font-size: 22px;
                        line-height: 1.5;
                        color: #828282;
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
    // if (query.id) {
    //     const res = await fetch(`${process.env.baseUrl}/content/${query.id}.json`);
    //     data = await res.json();
    // }
  
    // console.log(`Data fetched. Count: ${data}`);
  
    return query
  };
  

export default Post;