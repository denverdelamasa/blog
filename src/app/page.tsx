import HomepageHero from "./HomepageHero";
import PopularBlogs from "@/components/blog-components/PopularBlogs"
import RecentBlogs from "@/components/blog-components/RecentBlogs";
import About from "./About";

export default function Home() {
  return (
    <>
      <main className="min-h-[88vh] flex flex-col gap-4 my-4">
        <section className="hero min-h-[70vh] md:min-h-[88vh] border-2 border-gray-300 rounded-[8px]">
          <HomepageHero/>
        </section>
        <section className="flex flex-col md:flex-row gap-2">
          <section className="flex flex-col w-full md:w-7/8 gap-4">
            <section className="min-h-[100vh] bg-[#1971c2] rounded-[8px]">
              <PopularBlogs/>
            </section>
            <section className="h-auto bg-white border-2 border-gray-300 rounded-[8px]">
              <RecentBlogs/>
            </section>
            <section id="about" className="h-auto bg-[#ffd43b] rounded-[8px]">
              <About/>
            </section>
          </section>
          <aside className="neo-brutalist aside-pattern hidden md:block w-full md:w-1/8"></aside>
        </section>
      </main>
    </>
  );
}
