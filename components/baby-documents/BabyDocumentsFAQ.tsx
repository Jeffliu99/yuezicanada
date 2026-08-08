import { babyDocumentFaqs } from "@/data/babyDocuments";

export default function BabyDocumentsFAQ() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#1F4E4C]">
            常见问题
          </h2>
        </div>

        <div className="space-y-5">
          {babyDocumentFaqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] p-6"
            >
              <h3 className="font-bold text-[#1F4E4C]">{faq.question}</h3>
              <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
