import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/transactions', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'transação de teste',
      amount: 1000,
    })
    .returning('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
