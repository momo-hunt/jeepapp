import { json } from "@sveltejs/kit";
export const GET = async ({ url, params, locals }) => {
  const opts = Object.fromEntries(url.searchParams);

  // await new Promise((res) => setTimeout(res, 3000));
  const data = await locals.db.collection(params.collection).read(opts);

  return json(data);
};
