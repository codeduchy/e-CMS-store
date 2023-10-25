import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(
    `http://localhost:3000/api/de2e802a-3084-46e6-8306-2fb944ef9aca/categories/36f28581-eb6e-4e80-8cd6-0c0d6f1ed627`
  );

  return res.json();
};

export default getCategory;
