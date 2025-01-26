import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { AppLogo } from "../atoms/AppLogo";

export default function AppNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <AppLogo variant="simple" className="w-10 h-10" />
        <p className="pl-2 font-bold text-inherit">SGM Consultores</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#">Inicio</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Sobre nosotros</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Servicios</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">FAQ</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Contactanos</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
