'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const FollowerSideBar = () => {
  return (
    <div className="min-h-[calc(100vh-70px)] w-[25rem] border-l">
      <aside className="sticky top-0 right-0 bottom-0">
        <div className="py-5 pl-5 pr-2 h-full w-full">
          <h3 className="text-2xl font-semibold">Followers</h3>
          <div className="grid grid-cols-1 space-y-5 mt-5 overflow-y-auto h-[calc(100vh-100px)]">
            {Array(50)
              .fill(null)
              .map((item) => (
                <Link className="" href={'/'} key={item}>
                  <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10">
                      <Image
                        src={'https://ui-avatars.com/api/?size=128'}
                        className="rounded-full"
                        alt=""
                        fill
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col">
                        <p>Saeful Barkah</p>
                        <p>39K followers</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </aside>
    </div>
  );
};
