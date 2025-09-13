// "use client";

// import React from "react";
// import Image from "next/image";
// import SectionPill from "../../../components/ui/section-pill";

// interface HeroSectionProps {
//   pillText: string;
//   title: string;
//   desktopBg: string;
//   mobileBg?: string;
//   className?: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//   pillText,
//   title,
//   desktopBg,
//   mobileBg,
//   className,
// }) => {
//   return (
//     <section
//       className={`relative flex min-h-screen w-full items-center justify-center bg-[#F1FEF4] py-20 ${className}`}
//     >
//       <Image
//         src={desktopBg}
//         alt="Background illustration"
//         fill
//         className="absolute inset-0 z-0 object-cover hidden md:block"
//         priority
//       />

//       {mobileBg && (
//         <Image
//           src={mobileBg}
//           alt="Background illustration"
//           fill
//           className="absolute inset-0 z-0 object-contain object-bottom block md:hidden"
//           priority
//         />
//       )}

//       <div className="relative z-10 flex w-full max-w-6xl items-center justify-center text-center md:hidden">
//         <div className="px-4">
//           <SectionPill>{pillText}</SectionPill>
//           <h1 className="font-britti tracking-tight text-[#0D1A26] text-3xl leading-tight sm:text-4xl font-bold">
//             {title}
//           </h1>
//         </div>
//       </div>

//       <div className="relative z-10 hidden w-full max-w-6xl items-center justify-center text-center md:flex">
//         <div className="px-4">
//           <SectionPill>{pillText}</SectionPill>
//           <h1 className="font-britti tracking-tight text-[#0D1A26] text-4xl leading-tight sm:text-4xl lg:text-7xl font-bold">
//             {title}
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
