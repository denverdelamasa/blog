import { getAllPosts, PostMeta } from "@/lib/posts";
import Featured from "@/app/blog/content/Featured";
import PopularBlogPage from "@/app/blog/content/PopularBlogPage";
import RecentBlogPage from "@/app/blog/content/AllBlogPage";

import AppLoaderWrapper from "@/components/AppLoaderWrapper";

export default async function Blog() {
  const posts: PostMeta[] = await getAllPosts();

  return (
    <>
      <AppLoaderWrapper>
        <main className="hero flex flex-col gap-8 my-8 text-black">
          <section className="hero-content gap-4 items-start w-full">
            <Featured />
          </section>

          <section className="hero-content flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-8 bg-purple-700 rounded-[8px] w-full">
              <PopularBlogPage />
            </div>
            <div className="flex flex-col gap-8 grainy-bg bg-white border-2 border-gray-300 rounded-[8px] w-full">
              <RecentBlogPage posts={posts} />
            </div>
          </section>
        </main>
      </AppLoaderWrapper>
    </>
  );
}