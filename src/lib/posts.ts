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
    const slug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
    const { data } = matter(raw)
    return {
      title: slug,
      date: data.date ?? null,
      excerpt: data.excerpt ?? null,
      tags: data.tags ?? [],
      slug,
    } as PostMeta
  })
  return posts.sort((a, b) => (a.date && b.date ? (a.date < b.date ? 1 : -1) : 0))
}

export async function getPostBySlug(slug: string) {
  const full = path.join(postsDir, `${slug}.md`)
  const raw = fs.readFileSync(full, 'utf-8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()
  return {
    frontMatter: data,
    contentHtml,
    slug,
  }
}

export function getAllSlugs() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  return files.map(f => f.replace(/\.md$/, ''))
}
