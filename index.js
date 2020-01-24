const schedule = require('./schedule')
const Agenda = require('agenda');
const agenda = new Agenda({db: {
    address: 'mongodb://fdd:ced923cdc543828d16de268ff199927b@10.11.102.10:$27017/panvel_dev?authSource=admin',
    collection: 'agendaFelipe'},
    options: { useUnifiedTopology: true }
})

agenda.define('schedule', async job => {
    schedule()
});
   
(async function() {
    await agenda.start();

    //limpa o gerenciador dos jobs
    const numRemoved = await agenda.cancel({name: 'schedule'});
    console.log("Clear " + numRemoved + " job(s) ");

    await agenda.every('0 * * * * *', 'schedule');
    // await agenda.every('10 seconds', 'schedule');
})();