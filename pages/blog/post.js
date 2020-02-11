import Head from 'next/head';

import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';

import theme from '../../components/theme'

function Post(props) {
    if (props.data.title) {
        return (
            <>
                <Head>
                    <title>{props.data.title} | Uni Esports Group</title>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                    <meta name="description" content={props.data.description}></meta>
                </Head>
                <article>
                    <h1 className="blog-title">{props.data.title}</h1>
                    <div className="dateline">by {props.data.author} on {props.data.date}</div>
                    <div className="br"></div>
                    <img src={props.data.thumbnail} className="blog-thumb"></img>
                    <ReactMarkdown source={props.data.body} className="blog-content"/>
                </article>
                <style>{`
                    article {
                        margin: auto;
                        max-width: 800px;
                        padding: 0px 30px;
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
                    .blog-thumb {
                        width: 100%;
                        margin-top: 10px;
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
                        color: #4c4c4c;
                    }
                    .blog-content a {
                        color: inherit;
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
    return query
};
  

export default Post;