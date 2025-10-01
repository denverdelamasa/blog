import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
        <main className="min-h-[88vh]">
          <section className="min-h-[88vh] bg-white border-black">

          </section>
          <section className="min-h-[100vh] bg-[#1971c2] border-b-2 border-t-4 border-black">

          </section>
          <section className="min-h-[100vh] bg-white border-b-2 border-t-2 border-black">

          </section>
          <section className="min-h-[100vh] bg-[#ffd43b] border-b-4 border-t-2 border-black">
            
          </section>
        </main>
      <Footer/>
    </>
  );
}
