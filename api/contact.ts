import { Router } from "express";
import nodemailer from "nodemailer";
import "dotenv/config";

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body ?? {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { minVersion: "TLSv1.2" },
    });

    await transporter.sendMail({
      from: `Website <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<h4>New message from ${name}</h4>
             <p><b>Email:</b> ${email}</p>
             <p>${String(message).replace(/\n/g, "<br/>")}</p>`,
    });

    res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("Contact email failed:", err?.message || err);
    res.status(500).json({ ok: false, error: "Email failed" });
  }
});

export default router;