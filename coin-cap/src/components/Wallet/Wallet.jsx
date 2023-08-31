// @ts-nocheck
import { CurrencyList } from "components/CurrencyList";
import { useSelector } from "react-redux";
import "./style.css";

export const Wallet = () => {
  const wallet = useSelector((state) => state.wallet.wallet);
  const walletSum = wallet.reduce((acc, item) => acc + item.priceUsd, 0);
  return (
    <>
      <h1>{wallet.length > 0 ? "Ваш кошелек" : "Ваш кошелек пуст"}</h1>
      {wallet.length > 0 && (
        <>
          <CurrencyList data={wallet} showDeleteButton={true} />
          <h2>Общая ценность кошелька:</h2>
          <span className="total-sum">{walletSum} $</span>
        </>
      )}
    </>
  );
};
