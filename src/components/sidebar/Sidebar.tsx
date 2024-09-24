import React from 'react';
import { Button, ButtonProps } from '../ui/button';
import Link from 'next/link';
import { Camera } from 'lucide-react';

interface NavigationItem extends ButtonProps {
  label?: string | React.ReactNode;
  url?: string;
}

const SideNav = ({ label, url = '', ...props }: NavigationItem) => {
  return (
    <>
      <div className="w-full">
        <Button
          variant={'ghost'}
          className="rounded-full px-3 py-6 text-2xl"
          size={'lg'}
          {...props}
        >
          <Link href={url} className="">
            {label}
          </Link>
        </Button>
      </div>
    </>
  );
};

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 bottom-0 min-w-60 border-gray-600 border-r">
      <div className="h-full w-full pt-5 pl-8 pr-2">
        <div className="">
          <SideNav label={<Camera />} />
        </div>
        <div className="flex flex-col justify-center">
          <SideNav label="Home" />
          <SideNav label="Explore" />
          <SideNav label="Notifications" />
          <SideNav label="Message" />
          <SideNav label="Profile" />
        </div>
        <Button
          className="rounded-full mt-2 text-xl w-full h-[3.5rem]"
          size={'lg'}
        >
          Post
        </Button>
      </div>
    </aside>
  );
};
