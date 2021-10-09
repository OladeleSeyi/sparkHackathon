import { API } from "aws-amplify";

export const getCurrentPrice = async () => {
  try {
    const price = await API.get("buycoins", "/hello");
    return price;
  } catch (e) {
    throw e;
  }
};

export const getTxnFee = async (data) => {
  try {
    const txnFee = await API.post("buycoins", "/check", {
      body: { amount: data },
    });

    return txnFee.data.getEstimatedNetworkFee;
  } catch (e) {}
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
