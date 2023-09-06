import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute z-10 w-full px-8 py-8 sm:px-16">
      <nav className="flex items-center justify-between mx-auto max-w-7xl">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg leading-normal font-montserrat text-slate-grey"
              >
                {item.label}
              </a>
            </li>
          ))}
              </ul>
              <div className="flex gap-2 text-lg font-medium leading-normal font-montserrat max-lg:hidden wide:mr-24">
                  <a href="/" className="text-slate-grey">Sign In</a>
                  <span></span>
                  <a href="/" className="text-coral-red">Explore now</a>
              </div>
              <div className="hidden max-lg:block ">
                  <img src={hamburger} alt="hamburger icon" width={25} height={25} className="m-0 w-[24px] h-[24px]"/>
              </div>
      </nav>
    </header>
  );
};

export default Nav;
