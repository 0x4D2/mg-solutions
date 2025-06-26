import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, subject, message, customerType } = req.body;

  // Strato SMTP Einstellungen
  const transporter = nodemailer.createTransport({
    host: "smtp.strato.de",
    port: 465,
    secure: true,
    auth: {
      user: "info@ichwillsicherheit.de", 
      pass: process.env.STRATO_MAIL_PASS 
    }
  });

  try {
    await transporter.sendMail({
      from: `Kontaktformular <info@ichwillsicherheit.de>`,
      to: "info@ichwillsicherheit.de",
      subject: `[Kontaktformular] ${subject}`,
      text: `Kundentyp: ${customerType}\nName: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\nNachricht:\n${message}`
    });
    res.status(200).json({ message: "E-Mail gesendet" });
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Senden der E-Mail", error: error.message });
  }
}
