const workerFarm = require('worker-farm');
// const job_one = require('./job_one')
// const job_two = require('./job_two')

const schedule = () => {
    console.log('Entrou no schedule');

    let job_one = workerFarm(require.resolve('./job_one'))
    let job_two = workerFarm(require.resolve('./job_two'))

    job_one()
    job_two()
}

// const schedule = () => {
//     console.log('Entrou no schedule');
//     job_one()
//     job_two()
// }

module.exports = schedule