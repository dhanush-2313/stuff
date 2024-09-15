import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Healthy server",
  });
});

app.post("/", async (req, res) => {
  try {
    await client.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
      },
    });
    res.json({
      message: "Done signing up!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred during signup.",
    });
  }
});

// Ensure the Prisma client is properly closed when the application shuts down
process.on("SIGINT", async () => {
  await client.$disconnect();
  process.exit(0);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
