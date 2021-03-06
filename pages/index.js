import Head from 'next/head'
import Articles from '../components/Articles';

export default function Home({articles}) {
  
  return (
    <div>
      <Head>
        <title>Nextjs App</title>
        <meta name="keyword" content="web development, programming"/>
      </Head>
      <Articles articles={articles}/>
    </div>
  )
}

export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
