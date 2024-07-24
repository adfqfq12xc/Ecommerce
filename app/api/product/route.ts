import { ProductData } from "@/constant/data";

export const GET = async () => {
  try {
    return new Response(JSON.stringify(ProductData), {
      status: 200,
   
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,

    });
  }
};
