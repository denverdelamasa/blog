import Link from "next/link";

export default function About() {
  return (
    <>
        <div className="hero-content flex flex-col text-black w-full h-full md:justify-start md:items-start">
            <div className="flex flex-row">
                <div className="my-auto w-[8vh] h-[8vh] m-4 neo-brutalist  flex items-center justify-center">
                    <i className="bi bi-info-circle text-black text-[5vh]"></i>
                </div>
                <h1 className="text-7xl text-wrap my-auto">
                    About
                </h1>
            </div>
            <div className="flex flex-col md:flex-row w-full h-full gap-4">
                <div className="neo-brutalist w-full md:w-4/6 h-full">
                sample
                </div>
                <div className="neo-brutalist w-full md:w-2/6 h-full">
                sample
                </div>
            </div>
        </div>
    </>
  );
}