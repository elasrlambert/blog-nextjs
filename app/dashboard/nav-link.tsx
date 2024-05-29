"use client"; // 标识当前组件是 client component
import Link from "next/link";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "customers", href: "/dashboard/customers", icon: UserGroupIcon },
  {
    name: "invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks() {
  /**
   * 获取客户端所在的pathName，这是一个client hook，
   * 只有在client component可以使用。
   */
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 
            rounded-md 0 p-3 text-sm font-medium hover:bg-sky-100
             hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 
             ${pathName == link.href ? "bg-sky-200 text-blue-600" : ""}`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
