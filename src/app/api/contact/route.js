import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const { name, email, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Message from ${name}`,
      text: message,
    };
    await transporter.sendMail(mailOptions);
    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      message: "Message failed to send.",
    });
  }
};
