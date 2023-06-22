import { json, error } from "@sveltejs/kit";
export const GET = async ({ url, params, locals }) => {
  try {
    let { opt } = Object.fromEntries(url.searchParams);
    opt = opt ? JSON.parse(opt) : null;

    // await new Promise((res) => setTimeout(res, 3000));
    const data = await locals.db.collection(params.collection).read(opt);

    return json({ ...data, status: 200 });
  } catch (err) {
    return json(err);
  }
};
