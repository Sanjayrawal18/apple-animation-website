import { type JSX } from "react";
import { navLinks } from "../constant";
import type { NavLinksProps } from "../types";

const Navbar = (): JSX.Element => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul>
          {navLinks.map(
            ({ label }: NavLinksProps): JSX.Element => (
              <li key={label}>
                <a href={label}>{label}</a>
              </li>
            )
          )}
        </ul>

        <div className="flex-center gap-3">
            <button>
                <img src="/search.svg" alt="Search" />
            </button>
            <button>
                <img src="/cart.svg" alt="Cart" />
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
