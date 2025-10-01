import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex m-2 bg-[#ffd43b] neo-brutalist h-[12vh]">
      <div className="navbar-start">
        <Link href="https://denverdelamasa.vercel.app" target="_blank">
          <div className="avatar">
            <div className="w-[8vh] m-4 rounded-full neo-brutalist">
              <img
                alt="avatar"
                src="/avatar.png" />
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center flex flex-row gap-8">
        <Link href="/">
          <div className="bg-[#ffd43b] neo-brutalist py-2 px-4 text-black hover:text-white">
            <span className="text-xl">
              <i className="bi bi-house mr-2 my-auto"></i>
                Home
              </span>
          </div>
        </Link>
        <Link href="/posts">
          <div className="bg-[#ffd43b] neo-brutalist py-2 px-4 text-black hover:text-white">
            <span className="text-xl">
              <i className="bi bi-newspaper mr-2 my-auto"></i>
              Blog
              </span>
          </div>
        </Link>
        <Link href="#aboutme">
          <div className="bg-[#ffd43b] neo-brutalist py-2 px-4 text-black hover:text-white">
            <span className="text-xl">
              <i className="bi bi-info-circle mr-2 my-auto"></i>
              About
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="https://github.com/denverdelamasa/blog" target="_blank">
          <div className="w-[8vh] h-[8vh] m-4 neo-brutalist bg-[#24292d] flex items-center justify-center">
            <i className="bi bi-github text-white text-[5vh]"></i>
          </div>
        </Link>
      </div>
    </nav>
  );
}
