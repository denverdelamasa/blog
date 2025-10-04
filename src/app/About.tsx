import Link from "next/link";

export default function About() {
  return (
    <>
        <div className="flex flex-col text-black w-auto h-full justify-start md:items-start my-12 mx-4">
            <div className="flex flex-row mb-4">
                <div className="my-auto w-[8vh] h-[8vh] m-4 neo-brutalist  flex items-center justify-center">
                    <i className="bi bi-info-circle text-white text-[5vh]"></i>
                </div>
                <h1 className="text-white text-5xl md:text-6xl text-wrap my-auto">
                    About
                </h1>
            </div>
            <div className="flex flex-col md:flex-row w-full h-full gap-4">
                <div className="neo-brutalist w-full md:w-6/11 h-fit bg-white">
                    <div className="w-full h-18 bg-[#e9ecef] border-black border-b-4 flex">
                        <span className="w-full text-start mx-4 my-auto h-auto">
                            <h2 className="text-2xl">Bio</h2>
                        </span>
                    </div>
                    <div className="m-4 text-start">
                        <h3 className="text-4xl">
                            Denver Dela Masa
                        </h3>
                        <p className="text-lg italic">
                            Web Developer. Illustrator. Tech Support
                        </p>
                        <p className="text-sm mt-2 max-w-prose">
                            I like Illustrating, designing, creating, and fixing stuff. I guess being 
                            a creative at heart is why I naturally leaned into web design.
                            When I&apos;m not coding, I do art, play games, listen to music and just chill with my 
                            cat as we watch the sunset.
                        </p>
                        <p className="text-sm mt-2 max-w-prose">  
                            This blog is a personal project where I share my experiences, things I do, or whatever... 
                            but in truth, I just wanted a reason to make a neo-brutalist theme website xD!
                        </p>
                    </div>
                </div>
                <div className="neo-brutalist w-full md:w-5/11 h-fit bg-white flex flex-col">
                    <div className="w-full h-18 bg-[#e9ecef] border-black border-b-4 flex">
                        <span className="w-full text-start mx-4 my-auto h-auto">
                            <h2 className="text-2xl">Socials</h2>
                        </span>
                    </div>
                    <div className="m-4 text-start">
                        <ul className="flex flex-col m-0 gap-4">
                            <li className="flex flex-row gap-4">
                                <Link href="mailto:denverdelamasa@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 neo-brutalist bg-white flex items-center justify-center">
                                    <i className="bi bi-envelope-at text-black text-[3vh]"></i>
                                </Link>
                                <span className="my-auto">
                                    <h6 className="break-all text-xs md:text-lg">
                                        denver.delamasa@gmail.com
                                    </h6>
                                </span>
                            </li>
                            <li className="flex flex-row gap-4">
                                <Link href="https://www.github.com/denverdelamasa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 neo-brutalist bg-[#24292d] flex items-center justify-center">
                                    <i className="bi bi-github text-white text-[3vh]"></i>
                                </Link>
                                <span className="my-auto">
                                    <h6 className="break-all text-xs md:text-lg">
                                        github.com/denverdelamasa
                                    </h6>
                                </span>
                            </li>
                            <li className="flex flex-row gap-4">
                                <Link href="https://www.linkedin.com/in/denverdelamasa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 neo-brutalist bg-[#0072b1] flex items-center justify-center">
                                    <i className="bi bi-linkedin text-white text-[3vh]"></i>
                                </Link>
                                <span className="my-auto">
                                    <h6 className="break-all text-xs md:text-lg">
                                        linkedin.com/in/denverdelamasa
                                    </h6>
                                </span>
                            </li>
                            <li className="flex flex-row gap-4">
                                <Link href="https://www.instagram.com/wanedanvers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 neo-brutalist bg-linear-to-bl from-[#405DE6] to-[#F77737] flex items-center justify-center">
                                    <i className="bi bi-instagram text-white text-[3vh]"></i>
                                </Link>
                                <span className="my-auto">
                                    <h6 className="break-all text-xs md:text-lg">
                                        instagram.com/wanedanvers
                                    </h6>
                                </span>
                            </li>
                            <li className="flex flex-row gap-4">
                                <Link href="https://www.facebook.com/wndnvrs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 neo-brutalist bg-[#1877F2] flex items-center justify-center">
                                    <i className="bi bi-facebook text-white text-[3vh]"></i>
                                </Link>
                                <span className="my-auto">
                                    <h6 className="break-all text-xs md:text-lg">
                                        facebook.com/wndnvrs
                                    </h6>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}