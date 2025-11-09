import { createHash } from "node:crypto";

function generateMD5(text) {
    return createHash("md5").update(text, "utf-8").digest("hex");
}

const input = "";
const output = generateMD5(input);

console.log("Hash: ", output);
