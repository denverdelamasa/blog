import Link from "next/link";

export default function About() {
  return (
    <>
        <div className="hero-content flex flex-col text-black w-auto h-full md:justify-start md:items-start">
            <div className="flex flex-row">
                <div className="my-auto w-[8vh] h-[8vh] m-4 neo-brutalist  flex items-center justify-center">
                    <i className="bi bi-info-circle text-black text-[5vh]"></i>
                </div>
                <h1 className="text-7xl text-wrap my-auto">
                    About
                </h1>
            </div>
            <div className="flex flex-col md:flex-row w-full h-full gap-4">
                <div className="neo-brutalist w-full md:w-4/6 h-auto bg-white">
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
                        </p>
                        <p className="text-sm mt-2 max-w-prose">
                            When I’m not coding, I’m usually sketching characters or sitting outside 
                            with my cat, listening to music and watching the sunset. I also play guitar, 
                            bass, and drums — and I can sing decently, thanks to the church I grew up with.  
                        </p>
                    </div>
                </div>
                <div className="neo-brutalist w-full md:w-2/6 h-auto bg-white flex flex-col">
                    <div className="w-full h-18 bg-[#e9ecef] border-black border-b-4 flex">
                        <span className="w-full text-start mx-4 my-auto h-auto">
                            <h2 className="text-2xl">Socials</h2>
                        </span>
                    </div>
                    <div className="m-4 text-start">
                        <ul className="flex flex-col m-0 gap-4">
                            <li className="flex flex-row gap-4">
                                <div className="w-[6vh] h-[6vh] neo-brutalist bg-white flex items-center justify-center">
                                    <i className="bi bi-envelope-at text-black text-[3vh]"></i>
                                </div>
                                <span className="my-auto">
                                    <h4>
                                        denver.delamasa@gmail.com
                                    </h4>
                                </span>
                            </li>
                            <li className="flex flex-row gap-4">
                                <div className="w-[6vh] h-[6vh] neo-brutalist bg-[#24292d] flex items-center justify-center">
                                    <i className="bi bi-github text-white text-[3vh]"></i>
                                </div>
                                <span className="my-auto">
                                    <h4>
                                        github.com/denverdelamasa
                                    </h4>
                                </span>
                            </li>
                            <li className="flex flex-row gap-4">
                                <div className="w-[6vh] h-[6vh] neo-brutalist bg-[#0072b1] flex items-center justify-center">
                                    <i className="bi bi-linkedin text-white text-[3vh]"></i>
                                </div>
                                <span className="my-auto">
                                    <h4>
                                        linkedin.com/in/denverdelamasa
                                    </h4>
                                </span>
                            </li>
                            <li className="flex flex-row gap-4">
                                <div className="w-[6vh] h-[6vh] neo-brutalist bg-linear-to-bl from-[#405DE6] to-[#F77737] flex items-center justify-center">
                                    <i className="bi bi-instagram text-white text-[3vh]"></i>
                                </div>
                                <span className="my-auto">
                                    <h4>
                                        instagram.com/wandedanvers
                                    </h4>
                                </span>
                            </li>
                            <li className="flex flex-row gap-4">
                                <div className="w-[6vh] h-[6vh] neo-brutalist bg-[#1877F2] flex items-center justify-center">
                                    <i className="bi bi-facebook text-white text-[3vh]"></i>
                                </div>
                                <span className="my-auto">
                                    <h4>
                                        facebook.com/wndnvrs
                                    </h4>
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