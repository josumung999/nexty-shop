import nextConnect from "next-connect";
import User from "../../../models/User";
import db from "../../../utils/db";

const handler = nextConnect();

// Get all the users
handler.get(async (req, res) =>  {
  await db.connect();
  const users = await User.find({});
  await db.disconnect();

  res.send(users);
})


export default handler;

