import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import React from 'react'
import GiscusComments from '@/components/blog-components/GiscusComments'

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
        <h1 className="text-4xl font-bold mb-2 text-black">{post.frontMatter.title}</h1>
        <p className="text-sm opacity-70 mb-6 text-gray-400">{post.frontMatter.date}</p>

        <div
          className="prose prose-lg dark:prose-invert text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Giscus live comment box (client component) */}
        <div className="flex flex-col mt-12 neo-brutalist">
          <div className="flex flex-row gap-2 align-middle justify-start items-center p-4 w-full bg-[#e9ecef] border-b-4 border-black">
            <i className="bi bi-chat-right-text text-black text-3xl"></i>
            <h2 className="text-black text-4xl">
              Comments
            </h2>
          </div>
          <div className="p-4">
            <GiscusComments mapping="pathname" />
          </div>
        </div>
      </article>
      <section>
      </section>
      <section>
      </section>
    </main>
  )
}
