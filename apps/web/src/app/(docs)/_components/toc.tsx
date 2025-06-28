import { Card, CardContent, CardHeader, CardTitle } from '@/components';
import { PlayCircleIcon } from 'lucide-react';
import NextLink from 'next/link';
import { Button } from 'nextra/components';
import { FC } from 'react';

export const TOC: FC = async ({
}) => {
  return (
    <div className="grid gap-2 x:text-xs x:font-medium">
      <Card className="mt-4 p-2 gap-1">
        <CardHeader className="px-1 py-1">
          <CardTitle className="text-lg leading-normal">Relic Of Lies is released!</CardTitle>
        </CardHeader>
        <CardContent className="px-1 pt-0 pb-3">
          <p className="text-sm text-muted-foreground">
            Explore the new game!
          </p>
          <NextLink href="https://cifarm.xyz" target="_blank" className='w-full flex justify-center mt-2'>
            <Button variant="default" className="mt-3 w-full flex gap-x-1 justify-center shadow rounded-full py-2 shadow-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white">
              <PlayCircleIcon className="w-5 h-5" />
              Launch
            </Button>
          </NextLink>
        </CardContent>
      </Card>
    </div>
  );
};