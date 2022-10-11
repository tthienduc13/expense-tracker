function App() {
  return (
   <>
    <div className="w-full">
      <div className="w-[40rem] h-full mx-auto">
        <h1 className="font-semibold text-3xl flex justify-center mt-4">Expense Tracker</h1>
        <div className="mt-8">
          <h2 className="font-bold text-base">YOUR BALANCE</h2>
          <div className="flex flex-row font-bold text-3xl">
            <span>
              $
            </span>
            <p>260.00</p>
          </div>
        </div>
        <div className="drop-shadow-lg flex flex-row w-full bg-slate-100 p-8 text-lg justify-between mt-4">
          <div className="text-center w-1/2 border-r-2 text-3xl">
            <p className="font-bold">INCOME</p>
            <p className="text-green-700">
              <span>$</span>
              500.00
            </p>
          </div>
          <div className="text-center w-1/2 text-3xl">
            <p className="font-bold uppercase">Expense</p>
            <p className=" text-red-700">
              <span>$</span>
              240.00
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mt-8 text-xl border-b-2 py-2">History</h2>
          <div className="drop-shadow-lg bg-slate-100 flex justify-between p-2 font-semibold text-lg border-r-green-500 border-r-8 mt-4">
            <p>Cash</p>
            <span>+500</span>
          </div>
          <div className="drop-shadow-lg bg-slate-100 flex justify-between p-2 font-semibold text-lg border-r-red-500 border-r-8 mt-4">
            <p>Book</p>
            <span>-40</span>
          </div>
          <div className="drop-shadow-lg bg-slate-100 flex justify-between p-2 font-semibold text-lg border-r-red-500 border-r-8 mt-4">
            <p>Camera</p>
            <span>-200</span>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mt-8 text-xl border-b-4 py-2">Add new transaction</h2>
          <div className="mt-4">
            <p className="font-lg font-semibold">Text</p>
            <input placeholder="Enter text..." className="p-2 w-full border-2 mt-2"></input>
          </div>
          <div className="mt-4">
            <p className="font-lg font-semibold">Amount</p>
            <p className="font-lg font-semibold">(negative-expense, positive-income)</p>
            <input placeholder="Enter text..." className="p-2 w-full border-2 mt-2"></input>
          </div>
        </div>
        <button className="py-2 w-full bg-violet-500 text-white mt-4 font-semibold">Add transaction</button>
      </div>
    </div>
   </>
  );
}

export default App;
