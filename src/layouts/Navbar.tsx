'use client';

import { Button } from '@/components/nextui-extend-variants/Button';
import { menuItems } from '@/contents/menuItems';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react';

import Image from 'next/image';
import { useState } from 'react';

export default function NavbarLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='py-4 bg-white bg-opacity-90'
    >
      <NavbarContent className='flex justify-between'>
        <NavbarBrand className='h-full'>
          <Image
            height={78}
            width={136}
            src='/images/logo.png'
            alt='logo'
            className='h-full w-fit object-contain'
          />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='md:hidden'
        />
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex gap-4 md:gap-10 lg:gap-20'
        justify='center'
      >
        {menuItems.map((menu, index) => (
          <NavbarItem key={`${menu.label}-${index}`}>
            <Link color='primary' href={menu.href}>
              {menu.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end' className='hidden md:flex gap-4'>
        <NavbarItem>
          <Button as={Link} color='primary' href='/auth/login' variant='solid'>
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color='primary'
            href='/auth/register'
            variant='bordered'
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='pt-20 bg-white bg-opacity-90'>
        {menuItems.map((menu, index) => (
          <NavbarMenuItem key={`mobile-${menu.label}-${index}`}>
            <Link
              className='w-full py-4'
              color='primary'
              href={menu.href}
              size='lg'
            >
              {menu.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            as={Link}
            color='primary'
            href='/auth/login'
            variant='solid'
            className='w-full'
          >
            Login
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            as={Link}
            color='primary'
            href='/auth/register'
            variant='bordered'
            className='w-full'
          >
            Sign Up
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
