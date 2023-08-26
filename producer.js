const { Queue } = require('bullmq');

const notificationQueue = new Queue('email-queue', {
    connection: {
        host: '127.0.0.1',
        port: '6379'
    }
});

async function init() {
    const result = await notificationQueue.add("email to piyush", {
        email: "abc@gmail.com",
        subject: "Welcome Message",
        body: "Hey Welcome to the Bull MQ Learning"
    })
    console.log("Job Added to Queue", result.id);
}

init()