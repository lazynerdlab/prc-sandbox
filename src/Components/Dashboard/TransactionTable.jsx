const TransactionTable = ({}) => {
  const transactions = [
    {
      createdAt: "11/7/8",
      Recieve: 500,
      Sent: null,
      senderUserEmail: "test@gmail.com",
      recieverUserEmail: null,
      transactionId: "1234567898765432",
    },
    {
      createdAt: "11/7/8",
      Recieve: 500,
      Sent: null,
      senderUserEmail: "test@gmail.com",
      recieverUserEmail: null,
      transactionId: "1234567898765432",
    },
    {
      createdAt: "11/7/8",
      Recieve: 500,
      Sent: null,
      senderUserEmail: "test@gmail.com",
      recieverUserEmail: null,
      transactionId: "1234567898765432",
    },
    {
      createdAt: "11/7/8",
      Recieve: null,
      Sent: 500,
      senderUserEmail: null,
      recieverUserEmail: "test@gmail.com",
      transactionId: "1234567898765432",
    },
    {
      createdAt: "11/7/8",
      Recieve: 500,
      Sent: null,
      senderUserEmail: "test@gmail.com",
      recieverUserEmail: null,
      transactionId: "1234567898765432",
    },
    {
      createdAt: "11/7/8",
      Recieve: 500,
      Sent: null,
      senderUserEmail: "test@gmail.com",
      receiverUserEmail: null,
      transactionId: "1234567898765432",
    },
    {
      createdAt: "11/7/8",
      Recieve: 500,
      Sent: null,
      senderUserEmail: "test@gmail.com",
      receiverUserEmail: null,
      transactionId: "1234567898765432",
    },
    {
      createdAt: "11/7/8",
      Recieve: null,
      Sent: 500,
      senderUserEmail: null,
      receiverUserEmail: "test@gmail.com",
      transactionId: "1234567898765432",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="text-[1.5rem] text-primary-light">Transactions</div>
      {transactions?.length < 1 && <div>No Transaction History</div>}
      <table className="table-fixed border-separate border-spacing-2 border border-slate-400">
        <tbody className="border-spacing-y-[0.5rem]">
          {transactions.map((transactions) => {
            // const date = new Date(transactions?.createdAt);
            const date = transactions?.createdAt;
            console.log(date);
            return (
              <tr className="w-full">
                <td className="w-[20%]">
                  <div
                    className={
                      transactions?.Recieve
                        ? " bg-green-400 inline-block rounded-full py-[0.1rem] px-[0.3rem]"
                        : "bg-red-400 rounded-full inline-block py-[0.1rem] px-[0.3rem]"
                    }
                  >
                    {transactions?.Recieve ? "CR" : "DR"}
                  </div>
                </td>
                <td className="w-[20%]">
                  {/* <div>{date.toLocaleString()}</div> */}
                  <div>{transactions.createdAt}</div>
                </td>
                <td className="w-[20%]">
                  <p
                    className={
                      transactions?.Recieve ? " text-green-400" : "text-red-400"
                    }
                  >
                    {transactions?.Recieve || transactions?.Sent}
                  </p>
                </td>
                <td className="w-[20%]">
                  {transactions?.senderUserEmail ||
                    transactions?.recieverUserEmail}
                </td>
                <td className="w-[20%]">{transactions?.transactionId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
