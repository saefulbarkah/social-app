'use client';
import { Button } from '@/components/ui/button';
import { Bookmark, Dot, Heart, Mail, Share, BarChart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export const UserPosts = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1">
      {Array(10)
        .fill(null)
        .map((item, i) => (
          <div className="group border" key={i}>
            <div className="group-hover:bg-gray-200/10">
              <div className="px-5 py-2">
                {/* user */}
                <div
                  className="flex items-center gap-2 text-lg cursor-pointer select-text"
                  onClick={() => router.push('/user')}
                >
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
                {/* contents */}
                <div className="pl-12">
                  <div
                    className="cursor-pointer select-text"
                    onClick={() => router.push('/status')}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum optio iusto nobis. Magnam optio molestiae
                    necessitatibus numquam, perspiciatis inventore autem,
                    blanditiis voluptatem in obcaecati vero molestias. Quibusdam
                    cumque sapiente et?
                  </div>
                  {/* actions */}
                  <div className="flex justify-between pt-2 pb-1">
                    <Button variant={'ghost'} size={'sm'}>
                      <Heart />
                      <span className="ml-1">14k</span>
                    </Button>
                    <Button variant={'ghost'} size={'sm'}>
                      <Mail />
                      <span className="ml-1">14k</span>
                    </Button>
                    <Button variant={'ghost'} size={'sm'}>
                      <BarChart />
                      <span className="ml-1">14k</span>
                    </Button>
                    <div className="flex items-center justify-around">
                      <Button variant={'ghost'} size={'sm'}>
                        <Bookmark />
                      </Button>
                      <Button variant={'ghost'} size={'sm'}>
                        <Share />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
