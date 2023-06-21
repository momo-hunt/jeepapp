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

  const token = event.locals?.user?.token;
  event.locals.db = db;
  event.locals.db.setToken(token);

  const response = await resolve(event);
  return response;
};
