import React from 'react';
import { trendings } from '../trending';
import Link from 'next/link';

export const TrendingForYou = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold">Trending For You</h2>
      <div className="flex flex-col mt-5">
        {trendings.map((item, i) => (
          <Link
            href={'/GGMU'}
            className="hover:text-slate-900 text-slate-500 p-1.5 rounded-xl text-xl"
            key={i}
          >
            {item.tags}
          </Link>
        ))}
      </div>
    </div>
  );
};
