'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Dot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const UserPosts = () => {
  return (
    <div className="grid grid-cols-1 space-y-5">
      {Array(10)
        .fill(null)
        .map((item) => (
          <Link href={'/'} className="group" key={item}>
            <Card className="group-hover:bg-gray-200/10">
              <CardHeader className="p-5">
                <div className="flex items-center gap-2 text-lg">
                  <div className="relative w-10 h-10">
                    <Image
                      src={'https://ui-avatars.com/api/?size=128'}
                      className="rounded-full"
                      alt=""
                      fill
                    />
                  </div>
                  <h2 className="font-semibold">Saeful Barkah</h2>
                  <div className="flex items-center">
                    <Dot />
                    <p className="text-sm font-normal">5 min ago</p>
                  </div>
                </div>
                <CardContent className="px-0 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum optio iusto nobis. Magnam optio molestiae necessitatibus
                  numquam, perspiciatis inventore autem, blanditiis voluptatem
                  in obcaecati vero molestias. Quibusdam cumque sapiente et?
                </CardContent>
              </CardHeader>
            </Card>
          </Link>
        ))}
    </div>
  );
};
