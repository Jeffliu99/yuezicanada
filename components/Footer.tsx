import Link from "next/link";

const knowledgeLinks = [
  { href: "/postpartum-meals", label: "月子饮食" },
  { href: "/postpartum-recovery", label: "产后恢复" },
  { href: "/breastfeeding", label: "母乳喂养" },
  { href: "/canadian-benefits", label: "加拿大福利" },
];

const resourceLinks = [
  { href: "/blog", label: "博客文章" },
  { href: "/gta-guide", label: "GTA 月子资源" },
  { href: "/contact", label: "联系我们" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E8DCC9] bg-[#1F4E4C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold">Yuezi Canada</h3>
            <p className="mt-4 text-sm leading-7 text-white/80">
              加拿大月子知识库，帮助加拿大华人家庭了解月子饮食、产后恢复、母乳喂养以及加拿大生育福利。
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#D6B37F]">月子知识</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {knowledgeLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[#D6B37F]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#D6B37F]">资源中心</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[#D6B37F]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#D6B37F]">推荐服务</h4>
            <p className="mt-4 text-sm leading-7 text-white/80">
              寻找专业月子餐服务？欢迎了解加华月子餐四阶段调理体系。
            </p>
            <a
              href="https://www.jiahuameal.com/meal-plans"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#D6B37F] px-5 py-2.5 text-sm font-semibold text-[#1F4E4C] transition hover:bg-white"
            >
              了解加华月子餐
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Yuezi Canada. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
