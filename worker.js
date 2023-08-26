const { Worker } = require("bullmq");

const sendEmail = () => new Promise((rej, res) => setTimeout(() => res(), 5 * 1000));

const worker = new Worker("email-queue", async (job) => {
  console.log(`Message Received with Job Id: ${job.id}`);
  console.log(`Sending email to: ${job.data.email}`);
  await sendEmail();
  console.log("Email Sent")
});