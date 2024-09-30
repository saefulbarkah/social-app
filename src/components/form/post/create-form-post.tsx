'use client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type formTypes = {
  contents: string;
};

export const CreateFormPost = () => {
  const { handleSubmit, register } = useForm<formTypes>();

  // create post
  const onSubmit: SubmitHandler<formTypes> = (data) => {
    if (!data.contents) return;
    toast(data.contents);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        className="transition"
        placeholder="Write here....."
        rows={4}
        {...register('contents')}
      />

      <div className="mt-2 w-full flex items-center">
        <Button className="ml-auto" type="submit">
          Post
        </Button>
      </div>
    </form>
  );
};
