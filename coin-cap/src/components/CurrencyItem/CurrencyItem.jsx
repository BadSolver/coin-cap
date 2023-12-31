// @ts-nocheck
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteOneCurrency } from "store/walletSlice";
import { addDetailCurrency } from "store/detailSlice";
import { formatNumber } from "helpers";

export const CurrencyItem = ({
  currency,
  index,
  handleModal,
  showDeleteButton,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetailPage = (selectedCurrency) => {
    dispatch(addDetailCurrency(selectedCurrency));
    navigate("/detail");
  };

  const handleDeleteOneCurrency = (id) => {
    dispatch(deleteOneCurrency(id));
  };

  const changePercent = parseFloat(currency.changePercent24Hr);

  return (
    <li className="currency-item" key={currency.id}>
      <span>{index + 1}</span>
      <span>{currency.symbol}</span>
      <span
        onClick={() => handleDetailPage(currency)}
        className="currency-name"
      >
        {currency.name}
      </span>
      <span>{formatNumber(currency.vwap24Hr, 2)}</span>
      <span className={`${changePercent > 0 ? "positive" : "negative"}`}>
        {formatNumber(currency.changePercent24Hr, 2)} %
      </span>
      <span>{formatNumber(currency.marketCapUsd, 2)}</span>
      <span>{formatNumber(currency.priceUsd, 2)} $</span>
      <span>
        <div className="btn-block">
          <button
            className="add-crypto"
            onClick={() => handleModal(currency)}
          ></button>
          {showDeleteButton && (
            <button
              className="delete-button"
              onClick={() => handleDeleteOneCurrency(currency.id)}
            ></button>
          )}
        </div>
      </span>
    </li>
  );
};
