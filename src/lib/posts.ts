import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'src', 'posts')

export type PostMeta = {
  title: string
  date: string
  excerpt?: string
  tags?: string[]
  slug: string
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  const posts = files.map(file => {
    const fileSlug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
    const { data } = matter(raw)
    return {
      title: data.title ?? fileSlug,
      date: data.date ?? null,
      excerpt: data.excerpt ?? null,
      tags: data.tags ?? [],
      slug: data.slug ?? fileSlug, 
    } as PostMeta
  })
  return posts.sort((a, b) => (a.date && b.date ? (a.date < b.date ? 1 : -1) : 0))
}

export async function getPostBySlug(slug: string) {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  for (const file of files) {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
    const { data, content } = matter(raw)
    const fileSlug = data.slug ?? file.replace(/\.md$/, '')
    if (fileSlug === slug) {
      const processed = await remark().use(html).process(content)
      const contentHtml = processed.toString()
      console.log('Generated HTML:', contentHtml) // for debugging
      return {
        frontMatter: data,
        contentHtml,
        slug: fileSlug,
      }
    }
  }
  throw new Error(`Post with slug "${slug}" not found`)
}

export function getAllSlugs() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  return files.map(f => {
    const raw = fs.readFileSync(path.join(postsDir, f), 'utf-8')
    const { data } = matter(raw)
    return data.slug ?? f.replace(/\.md$/, '')
  })
}
