import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, subject, message, token } = req.body;

  // 1. Pflichtfelder
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ message: "Pflichtfelder fehlen." });
  }

  // 2. reCAPTCHA serverseitig verifizieren
  const captchaRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: "POST" }
  );
  const captchaData = await captchaRes.json();

  if (!captchaData.success || captchaData.score < 0.5) {
    return res.status(400).json({ message: "reCAPTCHA fehlgeschlagen." });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.strato.de",
    port: 465,
    secure: true,
    auth: {
      user: "info@ichwillsicherheit.de",
      pass: process.env.STRATO_MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Kontaktformular <info@ichwillsicherheit.de>`,
      to: "info@ichwillsicherheit.de",
      subject: `[Kontaktformular] ${subject}`,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || "—"}\nNachricht:\n${message}`,
    });
    res.status(200).json({ message: "E-Mail gesendet" });
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Senden der E-Mail", error: error.message });
  }
}