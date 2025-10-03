import Link from "next/link";
import { getAllPosts, PostMeta } from "../../lib/posts";
import { getPopularPosts } from "../../lib/github";

export default async function PopularBlogs() {
  // Fetch all posts and their engagement data
  const posts: PostMeta[] = await getAllPosts();
  // Get popular slugs sorted by engagement (top 3)
  const popularSlugs = await getPopularPosts(posts, 3);

  // Map slugs to post metadata
  const popularPosts = popularSlugs
    .map(slug => posts.find(p => p.slug === slug))
    .filter(Boolean) as PostMeta[];

  return (
    <div className="flex flex-col my-12 mx-4 align-middle">
      <div className="text-end mb-4">
        <div className="flex flex-row align-middle gap-4">
          <div className="my-auto w-[8vh] h-[8vh] neo-brutalist bg-[#1971c2] flex items-center justify-center">
            <i className="bi bi-fire text-white text-[5vh]"></i>
          </div>
          <h1 className="text-white text-4xl md:text-6xl my-auto">
            Popular Posts
          </h1>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {popularPosts.map((post, idx) => (
          <div
            key={post.slug}
            className="neo-brutalist flex flex-col justify-between bg-white"
          >
            <div>
              <div className="flex justify-end h-16 bg-[#e9ecef] mb-2 px-4 border-b-4 border-black">
                {idx === 0 && (
                    <span className="neo-brutalist inline-block bg-red-500 text-white text-sm font-bold py-1 px-3 my-auto">
                        Hot!
                    </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-black text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                {post.excerpt && (
                  <p className="mb-4 text-gray-900 line-clamp-3">{post.excerpt}</p>
                )}
              </div>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="m-4 neo-brutalist bg-[#ffd43b] px-4 py-2 text-black w-fit"
            >
              Read <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex my-4 justify-end">
        <Link
          href={`/blog`}
          className="neo-brutalist bg-[#ffd43b] px-4 py-2 text-black w-fit"
        >
          <i className="bi bi-newspaper mr-2"></i>
          View More
        </Link>
      </div>
    </div>
  );
}