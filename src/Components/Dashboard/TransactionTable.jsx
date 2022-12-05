const TransactionTable = ({ transactions }) => {
  return (
    <div className="flex flex-col w-[80%]">
        <div className="text-[1.5rem] text-primary-light">Transactions</div>
        {transactions?.length < 1 && <div>No Transaction History</div>}
        <table class="table-fixed">
          <tbody>
            {transactions.map((transactions) => {
              const date = new Date(transactions?.createdAt);
              console.log(date);
              return (
                <tr>
                  <td>
                    <div
                      className={
                        transactions?.Recieve
                          ? " bg-green-400 inline-block rounded-full p-[0.5rem]"
                          : "bg-red-400 rounded-full inline-block p-[0.5rem]"
                      }
                    >
                      {transactions?.Recieve ? "CR" : "DR"}
                    </div>
                  </td>
                  <td>
                    <div>{date.toLocaleString()}</div>
                  </td>
                  <td>
                    <p
                      className={
                        transactions?.Recieve
                          ? " text-green-400"
                          : "text-red-400"
                      }
                    >
                      {transactions?.Recieve || transactions?.Sent}
                    </p>
                  </td>
                  <td>
                    {transactions?.senderUserEmail ||
                      transactions?.recieverUserEmail}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  );
};

export default TransactionTable;
