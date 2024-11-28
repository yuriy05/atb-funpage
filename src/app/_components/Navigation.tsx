import Link from "next/link";

function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16">
        <li>
          <Link
            className="text-slate-200 hover:text-slate-50 transition-colors duration-300 ease-in-out"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-slate-200 hover:text-slate-50 transition-colors duration-300 ease-in-out"
            href="/tours"
          >
            Tours
          </Link>
        </li>
        <li>
          <Link
            className="text-slate-200 hover:text-slate-50 transition-colors duration-300 ease-in-out"
            href="/albums"
          >
            Albums
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
