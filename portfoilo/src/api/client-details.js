// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import mongoose from "mongoose";
import { Details } from "../model/model";

mongoose
  .connect(
    "mongodb+srv://avinash:LE9e9K7eKwrmFGyA@cluster0.istpydn.mongodb.net/clientdetails",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connect"))
  .catch((err) => console.log(err));

export default function handler(req, res) {
  Details.find({})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}
