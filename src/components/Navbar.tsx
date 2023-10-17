// src/components/Navbar.tsx
import Link from 'next/link';

function Navbar() {
  return (
    <div className="navbar bg-base-100 flex justify-between items-center p-4">
      <div>
        <Link href="/" className="btn btn-ghost normal-case text-xl mr-4">
          Home
        </Link>
        <Link
          href="/countries"
          className="btn btn-ghost normal-case text-xl mr-4"
        >
          Countries
        </Link>
        <Link href="/about" className="btn btn-ghost normal-case text-xl mr-4">
          About
        </Link>
      </div>
      <span className="btn btn-ghost normal-case text-2xl">Countries API</span>
    </div>
  );
}

export default Navbar;
