import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/postpartum-meals", label: "月子饮食" },
  { href: "/postpartum-recovery", label: "产后恢复" },
  { href: "/breastfeeding", label: "母乳喂养" },
  { href: "/canadian-benefits", label: "加拿大福利" },
  { href: "/blog", label: "博客" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DCC9] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F4E4C] text-sm font-bold text-white">
            YC
          </div>

          <div>
            <div className="text-lg font-bold leading-none text-[#1F4E4C]">
              Yuezi Canada
            </div>
            <div className="mt-1 text-xs text-gray-500">
              加拿大月子知识库
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#1F4E4C]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://www.jiahuameal.com/meal-plans"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#1F4E4C] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#173D3B] md:inline-flex"
        >
          加华月子餐
        </a>
      </div>
    </header>
  );
}
