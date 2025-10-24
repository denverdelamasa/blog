import Link from "next/link";
import { getAllPosts, PostMeta } from "../../lib/posts";

export default async function RecentBlogs() {
  const posts: PostMeta[] = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  // Fallback thumbnail in case none is provided
  const fallbackThumbnail = "https://avatars.githubusercontent.com/u/111408088?v=4";

  return (
    <div className="flex flex-col my-12 mx-4 align-middle">
        <div className="text-end mb-4">
            <div className="flex flex-row align-middle gap-4"> 
                <div className="my-auto w-[8vh] h-[8vh] xl:w-[12vh] xl:h-[12vh] neo-brutalist bg-white flex items-center justify-center">
                    <i className="bi bi-newspaper text-black text-[5vh] xl:text-6xl"></i>
                </div>
                <h1 className="text-black text-6xl xl:text-8xl my-auto">
                    Recent
                </h1>
            </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => {
                // Use the thumbnail from post or fallback
                const thumbnail = post.thumbnail || fallbackThumbnail;
                
                return (
                    <div
                        key={post.slug}
                        className="neo-brutalist flex flex-col justify-between bg-white"
                    >
                        <div>
                            <div className="flex h-24 bg-gray-200 border-b-4 border-black">
                                <img 
                                    src={thumbnail} 
                                    alt="thumbnail" 
                                    className="w-full h-full border-2 object-cover"
                                />
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
                );
            })}
        </div>
        <div className="flex my-4 justify-end">
            <Link
                href={`/blog`}
                className="neo-brutalist hover:bg-orange-500 bg-orange-400 px-4 py-2 text-white w-fit"
            >
                <i className="bi bi-newspaper mr-2"></i>
                View More
            </Link>
        </div>
    </div>
  );
}