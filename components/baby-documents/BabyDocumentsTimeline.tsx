import { babyDocumentTimeline } from "@/data/babyDocuments";

export default function BabyDocumentsTimeline() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Quick Overview
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#1F4E4C]">
            宝宝出生后办理顺序
          </h2>
          <p className="mt-5 leading-8 text-gray-600">
            以下为常见办理思路，具体要求请以加拿大及中国相关官方机构的最新说明为准。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          {babyDocumentTimeline.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1F4E4C] text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="font-bold text-[#1F4E4C]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
