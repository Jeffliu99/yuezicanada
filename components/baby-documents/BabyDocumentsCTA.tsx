import Link from "next/link";

export default function BabyDocumentsCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="text-4xl font-bold text-[#1F4E4C]">
          想继续了解加拿大月子与育儿资源？
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Yuezi Canada 会持续整理月子饮食、产后恢复、母乳喂养、加拿大福利和宝宝证件办理相关内容。
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/blog"
            className="rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]"
          >
            浏览文章
          </Link>
          <a
            href="https://www.jiahuameal.com/meal-plans"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
          >
            了解加华月子餐
          </a>
        </div>
      </div>
    </section>
  );
}
