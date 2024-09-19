import SwiperComponent from "@/components/swiperHero";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token");

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <SwiperComponent />
    </div>
  );
}
