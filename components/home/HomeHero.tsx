import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#1F4E4C]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,179,127,0.25),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:px-8 md:py-40">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6B37F]">
              Yuezi Canada
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-white md:text-8xl">
              加拿大月子知识库
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/90">
              为加拿大华人家庭提供权威、实用的月子知识，涵盖产后恢复、月子饮食、母乳喂养、加拿大福利以及宝宝证件办理指南。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/blog" className="inline-flex rounded-full bg-[#D6B37F] px-7 py-4 font-semibold text-[#1F4E4C] hover:bg-white">
                浏览最新文章
              </Link>

              <a
                href="https://www.jiahuameal.com/meal-plans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-white/40 px-7 py-4 font-semibold text-white hover:bg-white/10"
              >
                了解加华月子餐
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {["月子饮食","产后恢复","母乳喂养","加拿大福利","出生证明","加拿大护照","中国旅行证"].map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/home/hero-mother-baby.jpg"
                  alt="加拿大月子知识库首页主视觉"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="text-xs text-gray-500">热门专题</p>
              <p className="font-bold text-[#1F4E4C]">宝宝证件办理指南</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
