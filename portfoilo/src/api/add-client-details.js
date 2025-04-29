import mongoose from "mongoose";
import { Details } from "../../models/Details"; // Adjust path as needed

const mongoURI =
  "mongodb+srv://potnuruavinash111:iMe3zqU72XNCpzy8@cluster0.enxpl6p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Avoid multiple connections in development
      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(mongoURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
      }

      const { firstName, email, number, message } = req.body;

      const client = new Details({ firstName, email, number, message });
      await client.save();

      const allClients = await Details.find();
      res.status(200).json(allClients);
    } catch (err) {
      console.error("Error saving data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

