import React from 'react';
import Image from 'next/image';
import SectionPill from './section-pill'; 

const TimelineSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-">
        
        <div className="mx-auto max-w-5xl text-center">
          <SectionPill>Timeline</SectionPill>
          <h2  className="mt-4 text-[28px] font-bold text-start leading-snug"
            style={{ fontFamily: 'Britti Sans Trial' }}>
            Explore key milestones that shaped Covenant MFB&apos;s journey, highlighting growth, innovation, and community impact over the years.
          </h2>
        </div>

        <div className="mt-16">
          <div className="hidden lg:block">
            <Image
              src="/timeline.svg" 
              alt="A horizontal timeline of Covenant MFB's history from 2003 to 2025."
              width={1300} 
              height={600}
              className="mx-auto"
            />
          </div>

          <div className="block lg:hidden">
            <Image
              src="/timeline1.jpg" 
              alt="A vertical timeline of Covenant MFB's history."
              width={400} 
              height={1200}
              className="mx-auto w-full max-w-md"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TimelineSection;