import { menuLinks } from "@/data/menuLinks";
import { cn } from "@/lib/utils";
import { FaRegWindowClose } from "react-icons/fa";

type MobileMenuProps = {
  closeMenu: () => void;
  menu: boolean;
};

export default function MobileMenu({ closeMenu, menu }: MobileMenuProps) {
  const menuClass =
    "absolute left-0 top-0 min-h-screen w-full bg-bg-light py-[16px] transition-all dark:bg-bg-dark";
  const menuTransition = { "-translate-y-[999px]": !menu };

  return (
    <div className={cn(menuClass, menuTransition)}>
      <div className="min-h-[calc(63px-16px)] border-b border-line-light dark:border-line-dark">
        <button onClick={closeMenu} className="ml-auto mr-[10px] block">
          <FaRegWindowClose className="text-3xl" />
        </button>
      </div>
      <ul className="mt-28 flex flex-col items-center">
        {menuLinks.map((item, i) => {
          return (
            <li className="text-[24px]" key={i}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
