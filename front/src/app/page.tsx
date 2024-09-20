import PopularSection from "@/components/popularsection";
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
    </div>
  );
}
