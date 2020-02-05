import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href='/blog/[id]' as={`/blog/${props.pid}`}>
      <a>Test</a>
    </Link>
  </li>
);

export default function BlogHome() {
  return (
      <div>
        <h1>Our Blog</h1>
        <ul>
            <PostLink title="Hello Next.js" pid="test1"/>
            <PostLink title="Learn Next.js is awesome" pid="test2"/>
        </ul>
      </div>
  )
}