import React from "react";

const Title = ({
  text,
  borderColor,
  textColor,
}: {
  text: string;
  borderColor: string;
  textColor: string;
}) => {
  return (
    <div
      style={{ color: textColor }}
      className={`text-${textColor} py-1 h-fit pr-4 pl-3 border border-${borderColor} w-fit rounded-full font-semibold text-[17px] flex items-center justify-center text-center gap-2`}
    >
      <span className="text-2xl">•</span> {text}
    </div>
  );
};

export default Title;
