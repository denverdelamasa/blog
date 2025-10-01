import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex m-2 bg-[#ffd43b] neo-brutalist h-[12vh]">
      <div className="navbar-start">
          <div className="avatar">
            <div className="w-[8vh] m-4 rounded-full neo-brutalist">
              <img
                alt="avatar"
                src="/avatar.png" />
            </div>
          </div>
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
              Posts
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
        <div className="w-[8vh] h-[8vh] m-4 neo-brutalist bg-[#24292d] flex items-center justify-center">
          <i className="bi bi-github text-white text-[5vh]"></i>
        </div>
      </div>
    </nav>
  );
}
