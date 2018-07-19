import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
    <div>
      <Layout>
      <h1> Hello Next.js </h1>
      <ul>
        <PostLink title="Hello Next.js 1"/>
        <PostLink title="Hello Next.js 2"/>
        <PostLink title="Hello Next.js 3"/>
        </ul>
      </Layout>
    </div>
  )
