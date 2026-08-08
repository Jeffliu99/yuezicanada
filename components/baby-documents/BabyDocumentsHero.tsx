export default function BabyDocumentsHero() {
  return (
    <section className="bg-[#1F4E4C]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6B37F]">
          Baby Documents
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl">
          宝宝证件办理指南
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
          帮助加拿大华人家庭了解宝宝出生后的重要证件，包括出生证明、健康卡、加拿大护照、中国护照与中国旅行证。
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {["出生证明", "健康卡", "加拿大护照", "中国护照", "中国旅行证"].map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/10 px-4 py-2 text-sm text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
