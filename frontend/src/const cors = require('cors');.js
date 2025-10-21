const cors = require("cors");

app.use(
  cors({
    origin: "https://<votre-frontend>.azurestaticapps.net", // Remplacez par l’URL SWA
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
