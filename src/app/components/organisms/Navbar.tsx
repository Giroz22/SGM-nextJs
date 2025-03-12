"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { AppLogo } from "../atoms/AppLogo";
import { useState } from "react";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AppLogo variant="simple" className="w-10 h-10" />
          <p className="font-bold text-inherit pl-2 text-primary">
            SGM Consultores
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#">Inicio</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#nosotros">Sobre nosotros</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#services">Servicios</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#FAQ">FAQ</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden">
          <Link href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="#">Inicio</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Sobre nosotros</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Servicios</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">FAQ</Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="hidden">
          <Link href="#">Login</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
  // return (
  //   <Navbar shouldHideOnScroll>
  //     <NavbarBrand>
  //       <AppLogo variant="simple" className="w-10 h-10" />
  //       <p className="font-bold text-inherit pl-2 text-primary">
  //         SGM Consultores
  //       </p>
  //     </NavbarBrand>
  //     <NavbarContent className="hidden sm:flex gap-4" justify="center">
  //       <NavbarItem>
  //         <Link href="#">Inicio</Link>
  //       </NavbarItem>
  //       <NavbarItem>
  //         <Link href="#">Sobre nosotros</Link>
  //       </NavbarItem>
  //       <NavbarItem>
  //         <Link href="#">Servicios</Link>
  //       </NavbarItem>
  //       <NavbarItem>
  //         <Link href="#">FAQ</Link>
  //       </NavbarItem>
  //     </NavbarContent>
  //     <NavbarContent justify="end">
  //       <NavbarItem className="hidden">
  //         <Link href="#">Login</Link>
  //       </NavbarItem>
  //     </NavbarContent>
  //   </Navbar>
  // );
}

// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   NavbarMenu,
//   NavbarMenuItem,
// } from "@heroui/react";
// import { AppLogo } from "../atoms/AppLogo";

// export default function AppNavbar() {
//   return (
//     <Navbar shouldHideOnScroll isBlurred={false} className="bg-secondary">
//       <NavbarBrand>
//         <AppLogo variant="simple" className="w-10 h-10" />
//         <p className="pl-2 font-bold text-inherit text-primary">
//           SGM Consultores
//         </p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link href="#">Inicio</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link href="#">Sobre nosotros</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link href="#">Servicios</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link href="#">FAQ</Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Contactanos</Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarMenu>
//         <NavbarMenuItem>Hola</NavbarMenuItem>
//       </NavbarMenu>
//     </Navbar>
//   );
// }
