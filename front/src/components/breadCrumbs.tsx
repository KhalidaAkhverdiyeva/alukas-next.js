"use client";

import Link from "next/link";
import { capitalize } from "@/utils/textUtils";
import { usePathname } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";
import { MenuItem } from "primereact/menuitem";

const CommonBreadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  const home = { icon: "pi pi-home", url: "/" };

  const items: MenuItem[] = segments.map((item, index) => {
    const decodedItem = decodeURIComponent(item); // Decode the URL-encoded segment
    return {
      disabled: index === segments.length - 1, // Disable the last item
      template: () => (
        <Link
          href={`/${segments.slice(0, index + 1).join("/")}`}
          aria-label={`Go to ${capitalize(decodedItem)}`}
        >
          {capitalize(decodedItem)} {/* Display the decoded item */}
        </Link>
      ),
    };
  });

  // Add home link to items
  const model = [{ ...home }, ...items];

  return <BreadCrumb model={model} />;
};

export default CommonBreadcrumbs;
