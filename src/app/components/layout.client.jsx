// currentNavbar.tsx
'use client'
import { usePathname } from "next/navigation";
import NavbarHome from "./NavbarHome";

export default function CurrentNavbar() {
  const pathname = usePathname();

  if (!pathname.includes("/blog")) {
    return (
      <>
        <NavbarHome />
      </>
    );
  } else {
    return <></>;
  }
}

