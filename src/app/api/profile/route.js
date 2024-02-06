import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "/src/app/api/auth/[...nextauth]/route";
import { User } from "/src/models/User";
import { UserInfo } from "/src/models/UserInfo";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const {name, image, ...otherUserInfo} = data;
  const session = await getServerSession(authOptions);
  const email = session.user.email;
  
  

  await User.updateOne({email}, {name, image});

  await UserInfo.findOneAndUpdate({email:user.email}, otherUserInfo, {upsert:true});

  return Response.json(true);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
    return Response.json({});
  }
  const user = await User.findOne({ email }).lean();
  const userInfo = await User.findOne({ email }).lean();
  return Response.json({ ...user, ...userInfo });
}
