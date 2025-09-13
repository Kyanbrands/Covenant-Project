import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const id = (await params).slug;
  console.log(id);
  
  return <></>;
};

export default page;
