import React from "react";
import { getCurrentPrice, getTxnFee, sendFunds } from "../../api/requests";
import useFormFields from "../../lib/useFormFields";
import Cta from "./components/Cta";
import Form from "./components/Form";
import PriceList from "./components/PriceList";

const PaymentSection = () => {
  const initialFields = {
    email: "",
    sendAddress: "",
  };
  const [fields, handleFieldChange] = useFormFields(initialFields);
  const [amount, setAmount] = React.useState(0);
  const [currentPrice, setCurrentPrice] = React.useState(0);
  const [orderId, setOrderId] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [link, setLink] = React.useState(null);
  const [error, setError] = React.useState(null);

  // Functions

  function handleSelectAmount(num) {
    return setAmount(num);
  }

  function updatePrice() {
    console.log("count", count);
    setInterval(() => {
      return setCount(count + 1);
    }, 30000);
  }

  function getBtcAmount(price, amount) {
    return amount / price;
  }

  function getSafetyAmount(price, totalBtcAmount) {
    return totalBtcAmount * price;
  }

  // updatePrice();

  async function handleSend(e) {
    e.preventDefault();

    const btcAmount = getBtcAmount(currentPrice, amount);

    try {
      const { estimatedFee: networkFee, total: totalBtcAmount } =
        await getTxnFee(btcAmount);
      const safetyAmount = getSafetyAmount(currentPrice, totalBtcAmount);
      const requestVariables = {
        ...fields,
        btcAmount,
        networkFee,
        totalBtcAmount,
        amount,
        safetyAmount,
        orderId,
      };
      const request = await sendFunds(requestVariables);
      setLink(request.data.paymentLink);
    } catch (e) {
      setError(e);
    }
  }

  React.useEffect(() => {
    try {
      getCurrentPrice().then((res) => {
        const { buyPricePerCoin, id } = res.data;
        console.log("background update", buyPricePerCoin);
        setCurrentPrice(buyPricePerCoin);
        setOrderId(id);
      });
    } catch (e) {
      setError("An error occured Error");
    }
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Send Money</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6">
            <div className="group relative">
              <div className="relative w-full h-80 bg-green-100 p-2 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 flex flex-col space-y-4">
                <Cta />
                <PriceList handleSelectAmount={handleSelectAmount} />
              </div>
            </div>

            <div className="group relative">
              <div className="relative w-full h-80 bg-indigo-100 p-2 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Form
                  fields={fields}
                  handleFieldChange={handleFieldChange}
                  handleSend={handleSend}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
