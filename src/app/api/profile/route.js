import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from '/src/app/api/auth/[...nextauth]/route';
import { User } from "/src/models/User";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email  = session?.user?.email;


  console.log({session, data});

  // const user = await User.findOne({email});
  console.log('name' in data);
  if ('name' in data) {
    
    const result = await User.updateOne({email}, {name:data.name});
    console.log({email, update:{name:data.name}}, result);
    
  }

  return Response.json(true);
}
