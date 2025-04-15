"use client";

import Link from "next/link";
import { capitalize } from "@/utils/textUtils";
import { usePathname } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";
import { MenuItem } from "primereact/menuitem";

const CommonBreadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  const home: MenuItem = {
    label: "Home",
    url: "/",
    template: () => (
      <Link href="/" className="breadcrumb-home">
        <span className="mr-2 text-gray-500 font-[500]">Home</span>
      </Link>
    ),
  };

  const items: MenuItem[] = segments.map((item, index) => {
    const decodedItem = decodeURIComponent(item);

    return {
      disabled: index === segments.length - 1,
      label: capitalize(decodedItem),
      template: () => (
        <Link
          href={`/${segments.slice(0, index + 1).join("/")}`}
          aria-label={`Go to ${capitalize(decodedItem)}`}
        >
          <span className="ml-2 font-[500] text-[#222]">
            {capitalize(decodedItem)}
          </span>
        </Link>
      ),
    };
  });

  const model: MenuItem[] = [home, ...items];

  return <BreadCrumb model={model} className="breadcrumb-spacing" />;
};

export default CommonBreadcrumbs;
