import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import React from 'react'
import GiscusComments from '@/components/GiscusComments'

type Params = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage(props: Params) {
  const params = await props.params;
  const { slug } = params
  const post = await getPostBySlug(slug)

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <article>
        <h1 className="text-4xl font-bold mb-2">{post.frontMatter.title}</h1>
        <p className="text-sm opacity-70 mb-6">{post.frontMatter.date}</p>

        <div
          className="prose prose-lg dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Giscus live comment box (client component) */}
        <div className="mt-12">
          <GiscusComments mapping="pathname" />
        </div>
      </article>
    </main>
  )
}
