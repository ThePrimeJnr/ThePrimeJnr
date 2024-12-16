'use client';

import routes from '@/data/routes';
import { DarkModeOutlined, LightModeOutlined, Menu } from '@mui/icons-material';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const active = routes.find(
    (item: any) => item.value == '/' + pathname.split('/')[1],
  )?.name;

  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const ThemeToggleButton = () => (
    <Button
      size={'icon'}
      variant={'ghost'}
      onClick={() => {
        setTheme(theme == 'light' ? 'dark' : 'light');
      }}
      aria-label="Toggle theme"
    >
      <LightModeOutlined className="w-6 h-6 transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <DarkModeOutlined className="absolute w-6 h-6 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );

  const RouteLinks = () => (
    <>
      {routes.map((route: any, index: number) => (
        <div className="space-y-2 font-heading" key={route.value}>
          <Button
            variant={active === route.name ? 'default' : 'ghost'}
            className="w-full"
            onClick={() => {
              setOpen(false);
              router.push(route.value);
            }}
            aria-label={`Navigate to ${route.name}`}
          >
            <route.logo
              className="mr-2"
              style={{ maxWidth: 20, maxHeight: 20 }}
            />
            {route.name}
          </Button>
          {index !== routes.length - 1 && <Separator className="md:hidden" />}
        </div>
      ))}
    </>
  );

  return (
    <header className="flex justify-between items-center p-4 md:p-6 container">
      <div className="flex justify-between items-center md:hidden w-full">
        <Sheet
          open={open}
          onOpenChange={() => {
            setOpen(!open);
          }}
        >
          <SheetTrigger asChild>
            <Button size={'icon'} variant={'ghost'} aria-label="Open menu">
              <Menu fontSize="large" />
            </Button>
          </SheetTrigger>
          <SheetContent side={'top'} className="space-y-2 px-12 md:hidden">
            <RouteLinks />
          </SheetContent>
        </Sheet>
        <Logo />
        <ThemeToggleButton />
      </div>
      <div className="md:flex justify-between items-center hidden w-full">
        <Logo title={'ThePrimeJnr'} />
        <div className="flex items-center space-x-1">
          <RouteLinks />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
