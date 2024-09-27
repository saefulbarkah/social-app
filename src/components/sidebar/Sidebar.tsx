'use client';
import React from 'react';
import { Button, ButtonProps } from '../ui/button';
import Link from 'next/link';
import { Compass, Home, Bell, Mail, User } from 'lucide-react';
import { Camera } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';

interface NavigationItem extends ButtonProps {
  label?: string | React.ReactNode;
  url?: string;
  icon?: React.ReactNode;
}

const SideNav = ({ label, url = '', icon, ...props }: NavigationItem) => {
  const route = usePathname();
  return (
    <>
      <div className="w-full">
        <Button
          variant={'ghost'}
          className={`rounded-full px-3 py-6 text-2xl text-gray-400 hover:text-black ${
            route === url ? 'text-black' : 'text-gray-500'
          }`}
          size={'lg'}
          {...props}
        >
          <Link href={url} className={`flex items-center justify-center`}>
            {icon && <span className="mr-2">{icon}</span>}
            {label}
          </Link>
        </Button>
      </div>
    </>
  );
};

const CreatePost = () => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            className="rounded-full mt-2 text-xl w-full h-[3.5rem]"
            size={'lg'}
          >
            Post
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent aligh={'top'} transition={'fade'}>
          <AlertDialogHeader>
            <AlertDialogTitle>Create Post</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores illum, voluptas, praesentium culpa deserunt eum dicta
              excepturi, autem libero nam est. Provident blanditiis aliquid
              culpa porro quasi? Alias, aut eius.
            </p>
          </div>
          <AlertDialogCancel
            className="fixed top-0 right-0 -translate-x-4 translate-y-2 border-none"
            asChild
          >
            <Button className="text-black rounded-full p-2" variant={'ghost'}>
              <X className="w-7 h-7" />
            </Button>
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export const Sidebar = () => {
  return (
    <div className="min-h-(calc(100vh-100px)] min-w-72 border-r">
      <aside className="sticky top-0 border-gray-600">
        <div className="h-full w-full pt-5 pl-8 pr-2">
          <div className="">
            <SideNav label={<Camera />} />
          </div>
          <div className="flex flex-col justify-center">
            <SideNav label="Home" icon={<Home />} url="/" />
            <SideNav label="Explore" icon={<Compass />} url="/explore" />
            <SideNav
              label="Notifications"
              icon={<Bell />}
              url="/notifications"
            />
            <SideNav label="Message" icon={<Mail />} url="/message" />
            <SideNav label="Profile" icon={<User />} url="/profile" />
          </div>
          <CreatePost />
        </div>
      </aside>
    </div>
  );
};
