import React from "react";

const page = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;
  return (
    <div>
      <h1>This is category page {category}</h1>
    </div>
  );
};

export default page;
