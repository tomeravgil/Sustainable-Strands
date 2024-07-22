import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "sustainable.strands.signup@gmail.com" ,//process.env.EMAIL_USER,
    pass: "icbronpfndljjuia"//process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
};

export const sendMail = async (to: string, subject: string, text: string) => {
    
  try {
    await transporter.sendMail({ ...mailOptions, to, subject, text });
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
