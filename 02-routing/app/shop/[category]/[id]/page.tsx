"use client";

const page = async ({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) => {
  const { category, id } = await params;
  return (
    <div>
      <h1>The Category name is: {category}</h1>
      <h1>Product name is: {id}</h1>
    </div>
  );
};

export default page;
