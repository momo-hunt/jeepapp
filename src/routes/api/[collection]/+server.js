import { json } from "@sveltejs/kit";
export const GET = async ({ url, params }) => {
  const opts = Object.fromEntries(url.searchParams);

  await new Promise((res) => setTimeout(res, 3000));

  let data = [];
  return json({ data });
};
