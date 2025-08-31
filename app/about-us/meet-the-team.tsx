import React from 'react';
import SectionPill from './section-pill';
import { boardMembers, managementStaff } from './team-data';
import Image from 'next/image';

const MeetTheTeamSection = () => {
  return (
    <section className="bg-[#F8FBF8] py-16 sm:py-24">
      <div className="container mx-auto px-4">
        
        <div className="mx-auto max-w-5xl text-center">
          <SectionPill>Meet The Team</SectionPill>
          <p
            className="mt-4 text-[28px] font-bold text-start leading-snug"
            style={{ fontFamily: 'Britti Sans Trial' }}
          >
            At the heart of everything we do is a passionate and experienced team, 
            dedicated to driving our mission forward. Each member brings unique 
            expertise and energy, working together to create meaningful impact 
            and lasting change.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-2xl font-semibold text-gray-600">Board Members</h2>
<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center">            {boardMembers.map((member) => (
              <div key={member.id} className="text-center">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={220}
                  height={220}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center text-2xl font-semibold text-gray-600">
            Management Staff
          </h2>
           <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-items-center">            {managementStaff.map((member) => (
              <div key={member.id} className="text-center">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={220}
                  height={220}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetTheTeamSection;
