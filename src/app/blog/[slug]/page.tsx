// app/blog/[slug]/page.tsx

import { getAllSlugs, getPostBySlug, type FrontMatter } from '@/lib/posts'
import React from 'react'
import GiscusComments from '@/components/blog-components/GiscusComments'
import RecentBlogs from '@/components/blog-components/HomeRecentBlogs'
import PopularBlogs from '@/components/blog-components/HomePopularBlogs'
import AppLoaderWrapper from '@/components/AppLoaderWrapper'
import '@/app/styles/slug.css' 

type Params = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage(props: Params) {
  const params = await props.params;
  const { slug } = params
  const post = await getPostBySlug(slug)

  // Fallback thumbnail in case none is provided
  const fallbackThumbnail = "https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"

  // Use the thumbnail from frontMatter or fallback
  const thumbnail = post.frontMatter.thumbnail || fallbackThumbnail

  return (
    <AppLoaderWrapper>
      <main className='flex flex-col gap-8 my-8'>
        <section className="max-w-3xl mx-auto py-12 px-4">
          <article>
            <h1 className="text-6xl font-bold mb-2 text-black">{post.frontMatter.title}</h1>
            <p className="text-sm opacity-70 mb-6 text-gray-600">{post.frontMatter.date}</p>
            
            <img 
              alt={`Thumbnail for ${post.frontMatter.title}`} 
              width={650} 
              height={250} 
              src={thumbnail}
              className='neo-brutalist object-cover w-full max-w-full h-auto'
            />
            
            <div
              className="markdown-content text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
            <div className="flex flex-col mt-12 neo-brutalist">
              <div className="flex flex-row gap-2 align-middle justify-start items-center p-4 w-full bg-gray-200 border-b-4 border-black">
                <i className="bi bi-chat-right-text text-black text-3xl"></i>
                <h2 className="text-black text-4xl">Comments</h2>
              </div>
              <div className="p-4">
                <GiscusComments mapping="pathname" />
              </div>
            </div>
          </article>
        </section>
        
        <section className="flex flex-row h-auto gap-4">
          <div className="bg-purple-700 rounded-[8px] w-9/10">
            <PopularBlogs/>
          </div>
          <aside className="neo-brutalist aside-pattern hidden md:block m-2 w-1/10"></aside>
        </section>
        
        <section className="flex flex-row h-auto gap-4">
          <aside className="neo-brutalist aside-pattern hidden md:block w-1/10"></aside>
          <div className="grainy-bg bg-white border-2 border-gray-300 rounded-[8px] w-9/10">
            <RecentBlogs/>
          </div>
        </section>
      </main>
    </AppLoaderWrapper>
  )
}