import fs from "node:fs/promises";
export const getBooks = async () => {
  try {
    const data = await fs.readFile("./db.json", { encoding: "utf8" });

    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};
