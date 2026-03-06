import app from "./app";
import connectDB from "./app/config/database";
import { env } from "./app/config/env";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log(`AgroPoint server listening on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

startServer();
