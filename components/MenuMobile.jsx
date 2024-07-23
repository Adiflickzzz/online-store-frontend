import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, url: "/", name: "Jordan", doc_count: 11 },
  { id: 2, url: "/", name: "Sneakers", doc_count: 8 },
  { id: 3, url: "/", name: "Running shoes", doc_count: 64 },
  { id: 4, url: "/", name: "Football shoes", doc_count: 107 },
];

const MenuMobile = () => {
  return (
    <div className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {!!item?.subMenu ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 outline-none justify-center">
                {item.name} <BsChevronDown className="mt-[2px] text-xs" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2">
                {subMenuData.map((submenu) => (
                  <DropdownMenuItem>
                    <Link
                      className="w-full gap-6 items-center flex justify-between"
                      key={submenu.id}
                      href={submenu.url}
                    >
                      {submenu.name}
                      <span className="text-xs font-normal text-gray-500">
                        {submenu.doc_count}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={item.url}>{item.name}</Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuMobile;
