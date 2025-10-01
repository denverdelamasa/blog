import Link from "next/link";

export default function About() {
  return (
    <>
        <div className="hero-content text-black w-full h-full justify-start">
            <div className="flex flex-row">
                <div className="my-auto w-[8vh] h-[8vh] m-4 neo-brutalist  flex items-center justify-center">
                    <i className="bi bi-info-circle text-black text-[5vh]"></i>
                </div>
                <h1 className="text-7xl text-wrap my-auto">
                    About
                </h1>
            </div>
        </div>
    </>
  );
}