import { json } from "@sveltejs/kit";
export const GET = async ({ url, params, locals }) => {
  let { opt } = Object.fromEntries(url.searchParams);
  // console.log(opt);
  opt = opt ? JSON.parse(opt) : null;

  // await new Promise((res) => setTimeout(res, 3000));
  const data = await locals.db.collection(params.collection).read(opt);

  return json(data ?? null);
};
