import Featured from "@/app/blog/content/Featured";
import PopularBlogPage from "@/app/blog/content/Popular";
import RecentBlogPage from "@/app/blog/content/Recent";

export default function Blog() {
  return (
    <>
      <main className="hero flex flex-col gap-8 my-8 text-black">
        <section className="hero-content gap-4 items-start w-full">
          <Featured />
        </section>

        <section className="hero-content flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-8 bg-purple-700 rounded-[8px] w-full">
            <PopularBlogPage />
          </div>
          <div className="flex flex-col gap-8 grainy-bg bg-white border-2 border-gray-300 rounded-[8px] w-full">
            <RecentBlogPage />
          </div>
        </section>
      </main>
    </>
  );
}