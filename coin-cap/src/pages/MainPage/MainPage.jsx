// @ts-nocheck
import { CurrencyList, Loader } from "components";
import { useSelector } from "react-redux";

export const MainPage = () => {
  const currency = useSelector((state) => state.currency.currency);
  const loading = useSelector((state) => state.currency.loading);

  return (
    <div>
      <CurrencyList data={currency} showDeleteButton={false} />
      {loading && <Loader />}
    </div>
  );
};
