"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ConditionalLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  const routesWithoutHeaderFooter = ["/login", "/register"];

  return routesWithoutHeaderFooter.includes(pathname) ? (
    <>{children}</>
  ) : (
    <>
      <Header />
      {/* {children} */}
      <Footer />
    </>
  );
};

export default ConditionalLayout;
