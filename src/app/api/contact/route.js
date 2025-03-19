import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    // Parse the incoming request data
    const { name, email, message } = await req.json();

    // Create transporter object using Gmail service and environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: name, // Sender's name
      to: process.env.EMAIL, // Send the email to your own email address
      replyTo: email, // Add replyTo for user's email
      subject: `Message from ${name}`,
      text: `From: ${email}\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success message
    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully.",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Respond with failure message
    return new Response(
      JSON.stringify({
        success: false,
        message: "Message failed to send.",
      }),
      { status: 500 }
    );
  }
};
