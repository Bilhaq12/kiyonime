"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { Search } from "lucide-react";

const AppNavbar: React.FC = () => {
  return (
    <Navbar
      maxWidth="full"
      className="bg-background/60 backdrop-blur-lg shadow-sm sticky top-0 z-50"
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            Logo
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Link href="/manga">Manga</Link>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="action">
                <Link href="/manga/genre/action">Action</Link>
              </DropdownItem>
              <DropdownItem key="comedy">
                <Link href="/manga/genre/comedy">Comedy</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Link href="/anime">Anime</Link>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="action">
                <Link href="/anime/genre/action">Action</Link>
              </DropdownItem>
              <DropdownItem key="comedy">
                <Link href="/anime/genre/comedy">Comedy</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Input
            placeholder="Cari..."
            startContent={<Search />}
            classNames={{
              inputWrapper: "h-full",
            }}
          />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="/login" variant="light">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle />
      <NavbarMenu>
        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Link href="/manga">Manga</Link>
            </DropdownTrigger>
          </Dropdown>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Link href="/anime">Anime</Link>
            </DropdownTrigger>
          </Dropdown>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/login">
            Login
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;