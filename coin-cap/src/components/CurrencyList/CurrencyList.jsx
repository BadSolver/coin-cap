// @ts-nocheck
import { CurrencyItem } from "components/CurrencyItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCurrency } from "store/currencySlice";
import "./style.css";
import { ModalWindow } from "components/ModalWindow";

export const CurrencyList = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const cryptoCurrency = useSelector((state) => state.currency.currency);

  const handleModal = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(true);
  };

  useEffect(() => {
    dispatch(getAllCurrency());
  }, [dispatch]);

  return (
    <div className="currency-list-wrapper">
      <div className="header-list">
        <p>№</p>
        <p>SYMB</p>
        <p>Name</p>
        <p>VWAP</p>
        <p>Change</p>
        <p>Market Cap</p>
        <p>Price</p>
      </div>
      <ol className="currency-list">
        {cryptoCurrency.map((currency, index) => {
          return (
            <CurrencyItem
              currency={currency}
              key={currency.id}
              index={index}
              handleModal={handleModal}
            />
          );
        })}
      </ol>
      {isOpen ? (
        <ModalWindow
          handleModal={() => setIsOpen(false)}
          currency={selectedCurrency}
        />
      ) : null}
    </div>
  );
};
