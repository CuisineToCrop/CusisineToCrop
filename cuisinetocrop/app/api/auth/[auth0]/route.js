import { handleAuth, handleLogin, handleCallback } from "@auth0/nextjs-auth0";
// import { FindUser } from "@/app/_lib/mongoDB/utils/FindUser.js";

const afterCallback = async (req, session, state) => {
  try {
    // const isNewUser = await addNewUser(session.user.sub, session.user.email);
    
    // Add a custom claim to the session
    // session.user.isNewUser = isNewUser;
	session.user.isNewUser = true;
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