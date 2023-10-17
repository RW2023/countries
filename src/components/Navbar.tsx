// src/components/Navbar.tsx
import Link from 'next/link';

function Navbar() {
  return (
    <div className="navbar bg-base-100 flex flex-col md:flex-row justify-between items-center p-4">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link href="/countries" className="btn btn-ghost normal-case text-xl">
          Countries
        </Link>
        <Link href="/about" className="btn btn-ghost normal-case text-xl">
          About
        </Link>
      </div>
      <span className="btn btn-ghost normal-case text-2xl mt-4 md:mt-0">
        Countries API
      </span>
    </div>
  );
}

export default Navbar;
