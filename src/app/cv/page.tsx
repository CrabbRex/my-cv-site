// File: src/app/cv/page.tsx
import React from 'react';
import CvSheet from './CvSheet';
import CvSidebar from './CvSidebar';

const cv = () => {
  return (
    <main className="px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-start gap-5 md:grid-cols-[250px_minmax(0,1fr)] md:gap-9">
        <CvSidebar />
        <CvSheet />
      </div>
    </main>
  );
};

export default cv;
