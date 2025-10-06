import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex align-middle m-2 footer-grid min-h-[40vh] neo-brutalist">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto p-4 min-h-[10vh] gap-4">
          <div className="w-auto h-auto border-2 border-gray-300 rounded-sm bg-white text-black">
            <div className="p-4 text-sm">
              Designed in <strong>Excalidraw</strong><br/>
              Built with <strong>Nextjs & Tailwind</strong><br/>
              Coded in <strong>Visual Studio Code</strong><br/>
              Deployed in <strong>Vercel</strong><br/>
              <br/>
              <span className="text-gray-600">© Copyright 2025 Denver Dela Masa</span>
            </div>
          </div>
          <div className="w-full md:max-w-md h-auto border-2 border-gray-300 rounded-sm bg-white text-black">
            <div className="p-4 text-sm flex flex-wrap gap-4">
              <NavLink href="/" icon="bi-house" label="Home" />
              <NavLink href="/blog" icon="bi-newspaper" label="Blog" />
              <NavLink href="/#about" icon="bi-info-circle" label="About" />
            </div>
          </div>
          <div className="w-auto h-auto border-2 border-gray-300 rounded-sm bg-white text-black">
            <div className="p-4 text-sm flex flex-row gap-4">
              <Link href="https://denverdelamasa.vercel.app" target="_blank" className="flex flex-col gap-2">
                My Web Portfolio
                <Image alt="avatar" src="/avatar.png" width={42} height={42} className="rounded-full neo-brutalist" />
              </Link>
              <Link href="https://github.com/denverdelamasa/blog" target="_blank" className="flex flex-col gap-2">
                Github Repository
                <div className="w-[42px] h-[42px] neo-brutalist bg-[#24292d] flex items-center justify-center">
                  <i className="bi bi-github text-white text-xl"></i>
                </div>
              </Link>
            </div>
          </div>
      </div>
    </footer>
  );
}

function NavLink({ href, icon, label, onClick }: { href: string, icon: string, label: string, onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="w-fit text-center max-w-[200px]">
      <div className="hover:bg-orange-500 bg-orange-400 neo-brutalist py-2 px-4 text-white hover:text-black flex items-center justify-center gap-2 mx-2">
        <i className={`bi ${icon}`}></i>
        <span className="text-lg">{label}</span>
      </div>
    </Link>
  );
}
