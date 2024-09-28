import ToggleTheme from "../ToggleTheme";

export default function Header() {
  return (
    <header className="relative mx-[22px] border-x border-line-light px-[10px] py-[16px] dark:border-line-dark">
      <div className="flex items-center">
        <h2 className="text-xl">Welcome</h2>
        <div className="absolute right-28 top-0">
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}