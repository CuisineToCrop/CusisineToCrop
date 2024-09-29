import { handleAuth, handleLogin, handleCallback } from "@auth0/nextjs-auth0";
import { findUserBySubId } from "@/app/_lib/mongo/utils/finduser";

const afterCallback = async (req, session, state) => {
  try {
    const user = await findUserBySubId(session.user.sub);
    session.user.isNewUser = !user;

    console.log(session.user);
    return session;
  } catch (error) {
    console.error("Error in afterCallback:", error);
    return session;
  }
};

export const GET = handleAuth({
  login: handleLogin({
    returnTo: (req) => req.query.returnTo || "/dashboard",
  }),
  callback: handleCallback({ afterCallback }),
});