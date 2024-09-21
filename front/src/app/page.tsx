import AutumnSection from "@/components/autumnsection";
import CustomerReviewSection from "@/components/customerReview";
import FeauturedSection from "@/components/featuredsection";
import JournalSection from "@/components/journalSection";
import PinkBlock from "@/components/pinkblock";
import PopularSection from "@/components/popularsection";
import ShopNow from "@/components/shopNow";
import SwiperComponent from "@/components/swiperHero";
import TrendySection from "@/components/trendysection";
import TripleSection from "@/components/triplesection";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token");

  if (!token) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <SwiperComponent />
      <TripleSection />
      <PopularSection />
      <TrendySection />
      <PinkBlock />
      <AutumnSection />
      <ShopNow />
      <FeauturedSection />
      <CustomerReviewSection />
      <JournalSection />
    </div>
  );
}
