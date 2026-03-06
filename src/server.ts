import app from "./app";
import { env } from "./app/config/env";

app.listen(env.PORT, () => {
  console.log(`AgroPoint server listening on port ${env.PORT}`);
});
