import TransactionTable from './TransactionTable'

const Deposit = () => {
  return (
    <div className="p-4">
    <div className="flex w-full justify-center">
    <iframe title="Exolix widget" src="https://exolix.com/widget/BTC:BTC-ETH:ETH?a=1&locale=en&t=pEtLANcgIp5bfll5kbTOe7H0U2zyATdcjcOYyTCrztCPK8KklAHASO4quKtbDC0s" width="560px" height="376px" frameBorder="0" scrolling="yes"></iframe>
    </div>
      <TransactionTable />
    </div>
  )
}

export default Deposit