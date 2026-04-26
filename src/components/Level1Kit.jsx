import React from 'react';

const Level1Kit = () => {
  const launchEndDate = new Date('2026-07-25');
  const today = new Date();
  const daysLeft = Math.ceil((launchEndDate - today) / (1000 * 60 * 60 * 24));
  const isLaunchPeriod = today < launchEndDate;
  
  const currentPrice = isLaunchPeriod ? 250 : 500;
  const currentUSD = isLaunchPeriod ? 13.50 : 27.00;
  
  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8" style={{fontFamily: 'Open Sans, sans-serif'}}>
      {/* HEADER */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-black text-[#FFD700] mb-2" style={{fontFamily: 'Montserrat, sans-serif'}}>
          🍫 FORTUNE BROWNIES 2026 ♾️
        </h1>
        <h2 className="text-center text-2xl md:text-3xl font-black text-[#FFD700] mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
          LEVEL 1: KITCHEN HUSTLER DIGITAL KIT
        </h2>

        {/* PRICING BOX WITH COUNTDOWN */}
        {isLaunchPeriod ? (
          <div className="bg-[#8B0000] border-4 border-[#FFD700] p-6 mb-8 text-center animate-pulse">
            <p className="text-[#FFD700] text-xl md:text-2xl font-black mb-2">
              🔥 90-DAY LAUNCH SPECIAL 🔥
            </p>
            <p className="text-4xl md:text-6xl font-black text-white mb-2">
              M{currentPrice} <span className="text-2xl text-[#90EE90]">(${currentUSD} / R{currentPrice})</span>
            </p>
            <p className="text-[#FFD700] text-lg font-bold">
              Price increases to M500 ($27 / R500) in {daysLeft} days
            </p>
            <p className="text-white text-xl font-black mt-2">SAVE M250 - JOIN NOW</p>
          </div>
        ) : (
          <div className="bg-[#0a0a0a] border-4 border-[#FFD700] p-6 mb-8 text-center">
            <p className="text-[#FFD700] text-xl md:text-2xl font-black mb-2">
              STANDARD PRICING
            </p>
            <p className="text-4xl md:text-6xl font-black text-white mb-2">
              M{currentPrice} <span className="text-2xl text-[#90EE90]">(${currentUSD} / R{currentPrice})</span>
            </p>
          </div>
        )}

        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent my-6"></div>

        {/* WHAT YOU GET */}
        <h3 className="text-[#FFD700] text-2xl font-black mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
          YOU OWN:
        </h3>
        <ul className="space-y-3 mb-8">
          {[
            'License to produce & sell Fortune Brownies in your territory',
            '6 Pro Recipes with exact Lesotho costing',
            'Print-at-home packaging templates',
            'Your unique Referral Code = +250 points per recruit',
            'Academy Dashboard access to track sales + points',
            'Right to upgrade to Level 2-4 using points',
            'WhatsApp Support Group access',
            isLaunchPeriod && 'Launch members keep M250 price FOREVER'
          ].filter(Boolean).map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="text-[#FFD700] mr-3 text-xl">✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* PROFIT MATH */}
        <h3 className="text-[#FFD700] text-2xl font-black mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
          PROFIT MATH:
        </h3>
        <div className="bg-[#0a0a0a] border-2 border-[#FFD700] p-4 mb-8">
          <table className="w-full text-sm md:text-base">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2">Cost per tray - 12 pieces</td>
                <td className="text-right">M95 <span className="text-[#90EE90] text-xs">($5.13)</span></td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">Sell M15 x 12</td>
                <td className="text-right">M180 <span className="text-[#90EE90] text-xs">($9.72)</span></td>
              </tr>
              <tr className="border-t-2 border-[#FFD700]">
                <td className="py-2 font-bold">NET PROFIT PER TRAY</td>
                <td className="text-right font-black text-[#FFD700]">M85 <span className="text-[#90EE90] text-xs">($4.59)</span></td>
              </tr>
              <tr>
                <td className="py-2">Sell 1 tray/day = 30 days</td>
                <td className="text-right font-black text-[#FFD700]">M2,550 <span className="text-[#90EE90] text-xs">($138)</span>/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ROI */}
        <div className="text-center mb-8">
          <p className="text-xl mb-2"><strong>Pay M{currentPrice} once → Make M2,550/month</strong></p>
          <p className="text-[#FFD700] text-lg font-black">
            Break even: {Math.ceil(currentPrice / 85)} trays = {Math.ceil(currentPrice / 85)} days
          </p>
        </div>

        {/* PAYMENT BOX */}
        <div className="bg-[#0a0a0a] border-4 border-[#FFD700] p-6 mb-8">
          <h3 className="text-center text-[#FFD700] text-2xl font-black mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
            FORT KNOX PAYMENT VAULT
          </h3>
          <div className="text-center space-y-2">
            <p><strong>Account:</strong> Makhauhelo Moima</p>
            <p><strong>Bank:</strong> Lesotho Post Bank</p>
            <p><strong>Account No:</strong> 1036202900018</p>
            <p><strong>Mpesa:</strong> +26657031600</p>
            <p><strong>Ecocash:</strong> +2666281800</p>
            <p><strong>Reference:</strong> Your phone number</p>
            <div className="h-0.5 bg-[#FFD700] my-4"></div>
            <p className="text-[#FFD700] text-2xl font-black">
              Level 1: M{currentPrice} <span className="text-[#90EE90] text-lg">(${currentUSD} / R{currentPrice})</span>
            </p>
            {isLaunchPeriod && (
              <p className="text-sm text-[#90EE90]">Launch price ends July 25, 2026</p>
            )}
          </div>
        </div>

        {/* CTA BUTTON */}
        <a 
          href={`https://wa.me/26657031600?text=I%20paid%20M${currentPrice}%20for%20Level%201%20Kit.%20My%20reference:%20`}
          className="block w-full bg-[#FFD700] text-black text-center py-4 px-6 text-xl md:text-2xl font-black rounded-lg hover:bg-[#FFC700] transition"
          style={{fontFamily: 'Montserrat, sans-serif'}}
        >
          PAY NOW → SEND PROOF ON WHATSAPP
        </a>

        <p className="text-center text-sm text-[#FFD700] mt-8">
          🤍💛🖤♾️ | Fortune Brownies 2026 © All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Level1Kit;
