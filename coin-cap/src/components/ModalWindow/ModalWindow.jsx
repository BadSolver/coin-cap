// @ts-nocheck
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWallet, deleteAllCurrency } from "store/walletSlice";
import "./style.css";
import { formatNumber } from "./../../helpers/formatNumber";

export const ModalWindow = ({ handleModal, currency }) => {
  const {
    id,
    rank,
    priceUsd,
    supply,
    maxSupply,
    name,
    volumeUsd24Hr,
    vwap24Hr,
    marketCapUsd,
    symbol,
    changePercent24Hr,
    explorer,
  } = currency;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const wallet = useSelector((state) => state.wallet.wallet);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInputChange = (e) => {
    if (!isNaN(+e.target.value) && +e.target.value > 0) {
      setIsDisabled(false);
      setValue(+e.target.value);
    } else {
      setIsDisabled(true);
    }
  };

  const handleDeleteAllCurrency = () => {
    dispatch(deleteAllCurrency());
  };

  const handleAddToWallet = (e) => {
    const data = {
      id,
      rank,
      priceUsd: +value * priceUsd,
      count: value,
      supply,
      maxSupply,
      name,
      volumeUsd24Hr,
      vwap24Hr,
      marketCapUsd,
      symbol,
      changePercent24Hr,
      explorer,
    };
    dispatch(addToWallet(data));
    setValue("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title">Add to Wallet</h1>
          <button className="modal-close-button" onClick={handleModal}>
            &#x2715;
          </button>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="currency-info">
            <p>Currency: {currency.name}</p>
            <p>Price: {currency.priceUsd} $</p>
          </div>
          <div className="input-container">
            <label className="input-label">Quantity:</label>
            <input
              type="number"
              className="modal-input"
              onChange={handleInputChange}
              value={value}
              placeholder="Enter quantity"
            />
          </div>
          <ul className="wallet-list">
            {wallet.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>{item.count}</span>
                <span>{formatNumber(item.priceUsd, 2)} $</span>
              </li>
            ))}
          </ul>
          <div className="modal-actions">
            <button
              className="modal-add-button"
              onClick={handleAddToWallet}
              disabled={isDisabled}
            >
              Add to Wallet
            </button>
            <button
              className="delete-all-button"
              onClick={handleDeleteAllCurrency}
            >
              Delete All
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
