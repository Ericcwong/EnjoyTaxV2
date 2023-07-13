import { CardPaymentDetails } from 'square'
import { Client, Environment, ApiError } from 'square'

export default function Dashboard() {
  const client = new Client({
    accessToken: import.meta.env.VITE_SQUARE_ACCESS_TOKEN,
    environment: Environment.Production,
  })
  const { locationsApi } = client
  async function getTransactions() {
    try {
      let listTransactionResponse = await client.paymentsApi.listPayments()
      console.log(listTransactionResponse)
    } catch (error) {
      console.log(error)
    }
  }
  getTransactions()
  return (
    <div className="xl:container xl:m-auto h-full">
      <h1>Dashboard</h1>
    </div>
  )
}
