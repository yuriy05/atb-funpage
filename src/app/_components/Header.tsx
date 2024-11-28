import Logo from "../_ui/Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="px-20 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
