import { babyDocuments } from "@/data/babyDocuments";

export default function BabyDocumentsGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Essential Documents
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#1F4E4C]">
            主要证件说明
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {babyDocuments.map((doc) => (
            <article
              key={doc.title}
              className="rounded-[2rem] border border-[#E8DCC9] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 text-3xl">{doc.icon}</div>
              <h3 className="text-2xl font-bold text-[#1F4E4C]">
                {doc.title}
              </h3>
              <p className="mt-4 leading-8 text-gray-600">
                {doc.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-[#B8915D]">
                {doc.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
