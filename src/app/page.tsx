import HomepageHero from "./HomepageHero";
import PopularBlogs from "@/components/blog-components/PopularBlogs"
import RecentBlogs from "@/components/blog-components/RecentBlogs";
import About from "./About";

export default function Home() {
  return (
    <>
      <main className="min-h-[88vh] flex flex-col gap-4 my-4">
        <section className="hero flex flex-col md:flex-row gap-8 grainy-bg h-auto border-2 border-gray-300 rounded-[8px]">
          <section className="flex">
            <HomepageHero/>
          </section>
        </section>
        <section className="flex flex-col gap-2">
          <div className="flex flex-row h-auto bg-purple-700 rounded-[8px]">
            <PopularBlogs/>
          </div>
          <div className="flex flex-row h-auto grainy-bg bg-white border-2 border-gray-300 rounded-[8px]">
            <RecentBlogs/>
          </div>
          <div id="about" className="flex flex-row h-auto bg-orange-400 rounded-[8px] justify-between w-full">
            <About/>
          </div>
        </section>
      </main>
    </>
  );
}
