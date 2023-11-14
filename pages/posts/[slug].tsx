import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import { useEffect, useRef } from 'react'

type Props = {
  post: PostType
  preview?: boolean
}

const Comments = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.async = true;
    scriptElement.crossOrigin = 'anonymous';
    scriptElement.src = 'https://utteranc.es/client.js';

    scriptElement.setAttribute('issue-term', 'url');
    scriptElement.setAttribute('label', 'comment');
    scriptElement.setAttribute(
      'repo',
      '000dry/000dry.dev',
    );
    scriptElement.setAttribute(
      'theme',
      'github-light',
    );

    ref.current?.appendChild(scriptElement);
  }, []);

  return <div ref={ref} />;
}


export default function Post({ post }: Props) {
  const router = useRouter()
  const title = `${post.title}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-16">
              <Head>
                <title>{title}</title>
              </Head>
              <PostHeader
                title={post.title}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
        <Comments />
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
