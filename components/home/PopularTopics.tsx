import Link from "next/link";
import { topics } from "@/data/topics";

export default function PopularTopics() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Popular Topics
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#1F4E4C]">
            热门专题
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <Link key={topic.href} href={topic.href} className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold text-[#1F4E4C]">
                {topic.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {topic.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}