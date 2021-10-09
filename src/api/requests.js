import { API } from "aws-amplify";

export const getCurrentPrice = async () => {
  const price = await API.get("buycoins", "/hello");

  return price;
};

export const getTxnFee = async (data) => {
  try {
    const txnFee = await API.post("buycoins", "/check", {
      body: { amount: data },
    });

    return txnFee.data.getEstimatedNetworkFee;
  } catch (e) {
    throw e;
  }
};

export const sendFunds = async (data) => {
  try {
    const txn = await API.post("buycoins", "/request", {
      body: data,
    });

    return txn;
  } catch (e) {
    throw e;
  }
};
