import jwtx from "jsonwebtoken";
import {
  SECRET_ROLE_ADMIN,
  SECRET_ROLE_SOPIR,
  SECRET_ROLE_PUBLIC,
  SECRET_KEY,
} from "$env/static/private";

class JWT {
  constructor() {}

  sign(auth) {
    return jwtx.sign(auth, SECRET_KEY, {
      expiresIn: "1h",
    });
  }

  verify(sessionid) {
    return jwtx.verify(sessionid, SECRET_KEY);
  }

  checkRole = (roles) => {
    if (!roles) return;

    if (roles.includes(Number(SECRET_ROLE_ADMIN)))
      return { name: "Admin", level: 5 };
    if (roles.includes(Number(SECRET_ROLE_SOPIR)))
      return { name: "Sopir", level: 2 };
    if (roles.includes(Number(SECRET_ROLE_PUBLIC)))
      return { name: "User", level: 1 };
    return { name: "Public", level: 1 };
  };
}

export const jwt = new JWT();
