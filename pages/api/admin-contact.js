import nodemailer from 'nodemailer';

export default async function ContactAPI(req, res) {
   
  const { name, email, message } = req.body;

  const user = process.env.EMAIL_USER; // Corrected the variable name

 
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.EMAIL_PASS, // Corrected the variable name
      debug: true,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "ndukwenmaju@gmail.com",
      replyTo: email,
      subject: `Admin Feedback form submission from ${name}`,
      html: `
        <div className="text-center">
          <p className="text-xl font-semibold">Name: ${name}</p>
          <p className="text-lg font-semibold">Email: ${email}</p>
          <p className="text-2xl font-semibold">Message: ${message}</p>
        </div>
      `,
    });

    console.log("Message sent:", mail.messageId);
    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Could not send the email. Your message was not sent." });
  }
}


