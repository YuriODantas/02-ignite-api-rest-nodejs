import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
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
}
