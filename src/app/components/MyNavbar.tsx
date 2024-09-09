"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { MyLogo } from "./MyLogo";

export default function MyNavbar() {
  const menuItems = [
    {
      href: "/",
      item: "Inicio",
    },
    {
      href: "/aboutUS",
      item: "Nosotros",
    },
    {
      href: "/services",
      item: "Servicios",
    },
    {
      href: "/FAQ",
      item: "FAQ",
    },
  ];

  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <MyLogo variant="simple" />
          <p className="font-bold text-inherit">S.G.M</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <MyLogo variant="simple" />
          <p className="font-bold text-inherit">S.G.M</p>
        </NavbarBrand>

        {menuItems.map(({ item, href }, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href={href}>
              {item}
            </Link>
          </NavbarItem>
        ))}
        <ThemeSwitcher />
      </NavbarContent>

      <NavbarContent justify="end"></NavbarContent>

      <NavbarMenu>
        {menuItems.map(({ item, href }, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href={href} size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem key={`darkBtn`}>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
