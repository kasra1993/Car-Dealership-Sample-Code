const fs = require("fs");
import path from "path";
import getConfig from "next/config";
export default async function handler(req, res) {
  const { method, query } = req;
  const { filename } = query;
  if (method === "GET") {
    const { serverRuntimeConfig } = getConfig();
    const dir = path.join(
      serverRuntimeConfig.PROJECT_ROOT,
      ".well-known",
      "acme-challenge",
      filename
    );
    try {
      const file = fs.readFileSync(dir, "utf-8");
      if (file) {
        return res.send(file);
      } else {
        return res.status(404).json("notFound");
      }
    } catch (error) {
      return res.status(500).json("server error");
    }
  }
  return res.status(404).json("notFound");
}
