import { Router } from "express";
import nodemailer from "nodemailer";
import { smtp } from "../config"; // wherever you keep secrets

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body ?? {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      host: smtp.SMTP_HOST,
      port: smtp.SMTP_PORT,
      secure: smtp.SMTP_SECURE,
      auth: { user: smtp.SMTP_USER, pass: smtp.SMTP_PASS },
      tls: { minVersion: "TLSv1.2" },
    });

    await transporter.sendMail({
      from: `Website <${smtp.MAIL_FROM || smtp.SMTP_USER}>`,
      to: smtp.MAIL_TO || smtp.SMTP_USER,
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