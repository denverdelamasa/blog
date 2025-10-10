import Link from "next/link";
import { getAllPosts, PostMeta } from "@/lib/posts";

export default async function RecentBlogPage() {
  // Fetch all posts and take the latest 3
  const posts: PostMeta[] = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col my-12 mx-4 align-middle">
        <div className="text-end mb-4">
            <div className="flex flex-row align-middle gap-4"> 
                <div className="my-auto w-[8vh] h-[8vh] neo-brutalist bg-white flex items-center justify-center">
                    <i className="bi bi-envelope-at text-black text-[5vh]"></i>
                </div>
                <h1 className="text-black text-6xl my-auto">
                    Recent
                </h1>
            </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
            <div
                key={post.slug}
                className="neo-brutalist flex flex-col justify-between bg-white"
            >
                <div>
                    <div className="flex h-16 bg-gray-200 mb-2 px-4 border-b-4 border-black">
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
                    className="m-4 neo-brutalist hover:bg-orange-500 bg-orange-400 px-4 py-2 text-white w-fit"
                >
                    Read <i className="bi bi-arrow-right"></i>
                </Link>
            </div>
            ))}
        </div>
    </div>
  );
}