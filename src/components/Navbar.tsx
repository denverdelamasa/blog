import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky m-2 bg-[#ffd43b] neo-brutalist min-h-[10vh]">
      <div className="navbar-start">
          <div className="avatar">
            <div className="w-[8vh] m-2 rounded-full neo-brutalist">
              <img
                alt="avatar"
                src="/avatar.png" />
            </div>
          </div>
      </div>
      <div className="navbar-center">

      </div>
      <div className="navbar-end">

      </div>
    </nav>
  );
}
