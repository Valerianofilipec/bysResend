import { Resend } from 'resend';
import "dotenv/config";

const   API_KEY = process.env.RESEND_API_KEY,
        resend = new Resend(API_KEY);

(async function () {
  try {
    const data = await resend.emails.send({
      from: 'Valeriano Filipe <valerianofc@valerianofc.codes>',
      to: ['valeriofilipec@gmail.com'],
      subject: 'Hello World! by Resend',
      html: '<strong>It works!</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
