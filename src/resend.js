import { Resend } from 'resend';
import "dotenv/config";
import {v4 as uuid} from "uuid";

const   API_KEY = process.env.RESEND_API_KEY,
        resend = new Resend(API_KEY);

(async function () {
  try {
    const data = await resend.emails.send({
      from: 'Valeriano Filipe <valerianofc@valerianofc.codes>',
      to: ['valeriofilipec@gmail.com'],
      subject: 'Hello World! by Resend',
      html: '<strong>It works!</strong>',
      headers:{
        'X-Entity-Ref-ID': uuid(),
      },
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
