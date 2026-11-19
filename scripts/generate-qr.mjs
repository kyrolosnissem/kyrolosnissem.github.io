// Usage: npm run qr   (reads siteUrl from src/config.js)
import QRCode from "qrcode";
import { config } from "../src/config.js";
const opts = { errorCorrectionLevel: "H", margin: 4, color: { dark: "#000000", light: "#ffffff" } };
await QRCode.toFile("public/qr/portfolio-qr.png", config.siteUrl, { ...opts, width: 2400 });
await QRCode.toFile("public/qr/portfolio-qr.svg", config.siteUrl, { ...opts, type: "svg" });
console.log("QR codes generated for:", config.siteUrl);
