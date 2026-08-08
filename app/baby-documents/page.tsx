import BabyDocumentsHero from "@/components/baby-documents/BabyDocumentsHero";
import BabyDocumentsTimeline from "@/components/baby-documents/BabyDocumentsTimeline";
import BabyDocumentsGrid from "@/components/baby-documents/BabyDocumentsGrid";
import BabyDocumentsFAQ from "@/components/baby-documents/BabyDocumentsFAQ";
import BabyDocumentsCTA from "@/components/baby-documents/BabyDocumentsCTA";

export const metadata = {
  title: "宝宝证件办理指南 | Yuezi Canada",
  description:
    "加拿大新生儿证件办理指南，涵盖出生证明、健康卡、加拿大护照、中国护照、中国旅行证及常见问题。",
};

export default function BabyDocumentsPage() {
  return (
    <main className="bg-[#FAF8F5]">
      <BabyDocumentsHero />
      <BabyDocumentsTimeline />
      <BabyDocumentsGrid />
      <BabyDocumentsFAQ />
      <BabyDocumentsCTA />
    </main>
  );
}
