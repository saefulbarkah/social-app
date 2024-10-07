import React from 'react';
import { UserPosts } from './components/user-post';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Home = () => {
  return (
    <Tabs defaultValue="for-you">
      <TabsList className="w-full h-14 p-0 sticky top-0 z-50 border rounded-none">
        <TabsTrigger value="for-you" className="w-full h-full">
          For You
        </TabsTrigger>
        <TabsTrigger value="following" className="w-full h-full">
          Followinng
        </TabsTrigger>
      </TabsList>
      <TabsContent value="for-you" className="mt-0 mb-2">
        <UserPosts />
      </TabsContent>
      <TabsContent value="following" className="mt-0 mb-2">
        <div className="">Following</div>
      </TabsContent>
    </Tabs>
  );
};
