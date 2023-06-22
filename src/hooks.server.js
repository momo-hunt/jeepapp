import { db, jwt } from "$lib/server";

export const handle = async ({ event, resolve }) => {
  event.locals.jwt = jwt;

  const sessionid = event.cookies.get("sessionid");
  if (sessionid) {
    try {
      event.locals.user = event.locals.jwt.verify(sessionid);
      event.locals.user.role = event.locals.jwt.checkRole(
        event.locals.user.role
      );
    } catch (err) {
      console.log("jwt token expired");
      event.cookies.delete("sessionid");
    }
  }

  const token =
    event.locals?.user?.token || "b8d7d16e-0dae-4983-a703-e697270e447a";
  event.locals.db = db;
  event.locals.db.setToken(token);

  const response = await resolve(event);
  return response;
};
