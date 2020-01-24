const Agenda = require('agenda');
const agenda = new Agenda({db: {
        address: 'mongodb://fdd:ced923cdc543828d16de268ff199927b@10.11.102.10:$27017/panvel_dev?authSource=admin',
        collection: 'agendaFelipe',
        options: { useUnifiedTopology: true }
    }
})

const job_one = () => {
    agenda.define('job_one', async job => {
        console.log('Job one');
        setTimeout(() => {
            console.log('Job one Done');
        }, 9000);
    });
       
    (async function() {
        await agenda.start();
        await agenda.every('20,40 * * * * *', 'job_one');
        // await agenda.every('5 seconds', 'job_one');
    })();
}

module.exports = job_one