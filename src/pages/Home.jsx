export default function Home() {
  return (
    <div className="min-h-screen bg-black text-yellow-400 p-4 font-mono">
      <div className="max-w-md mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6 border-2 border-yellow-400 rounded-lg p-3">
          <h1 className="text-xl font-bold">TOTAL REVENUE</h1>
        </div>

        {/* Stats Boxes */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="border-2 border-yellow-400 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">M0</div>
            <div className="text-sm">Academy</div>
            <div className="text-sm">M250</div>
          </div>
          <div className="border-2 border-yellow-400 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">M0</div>
            <div className="text-sm">Gift</div>
            <div className="text-sm">Shop 🔒</div>
          </div>
          <div className="border-2 border-yellow-400 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm">Head</div>
            <div className="text-sm">Count</div>
          </div>
        </div>

        {/* All Members Table */}
        <div className="border-2 border-yellow-400 rounded-lg p-4 mb-6">
          <div className="text-center mb-3 text-lg">
            👥 ALL MEMBERS TABLE 👥
          </div>
          <div className="grid grid-cols-3 text-sm border-b border-yellow-400 pb-2 mb-2">
            <div>Email</div>
            <div>Academy</div>
            <div>Joined</div>
          </div>
          <div className="grid grid-cols-3 text-sm">
            <div className="break-all">makhauhelomoima@gmail.com</div>
            <div>✅ M250</div>
            <div>4/28/2026</div>
          </div>
        </div>

        {/* All Sales Ledger */}
        <div className="border-2 border-yellow-400 rounded-lg p-4">
          <div className="text-center mb-3 text-lg">
            💸 ALL SALES LEDGER 💸
          </div>
          <div className="grid grid-cols-4 text-sm border-b border-yellow-400 pb-2 mb-2">
            <div>Date</div>
            <div>Customer</div>
            <div>Product</div>
            <div>Amount</div>
          </div>
          <div className="text-center text-sm py-4">
            No sales yet - Launch tonight
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs opacity-70">
          Fortune Brownies ©2026 🍫♾️🔐🇱🇸
        </div>

      </div>
    </div>
  )
}