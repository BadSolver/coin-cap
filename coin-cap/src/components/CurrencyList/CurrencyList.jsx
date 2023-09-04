// @ts-nocheck
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCurrency } from "store/currencySlice";
import { CurrencyItem, ModalWindow } from "components";
import "./style.css";

export const CurrencyList = ({ data, showDeleteButton }) => {
  const [limit, setLimit] = useState(14);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const dispatch = useDispatch();

  const handleModal = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(true);
  };

  useEffect(() => {
    dispatch(getAllCurrency(limit));
  }, [limit]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLimit((prevLimit) => prevLimit + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        {data.map((currency, index) => {
          return (
            <CurrencyItem
              currency={currency}
              key={currency.id}
              index={index}
              handleModal={handleModal}
              showDeleteButton={showDeleteButton}
            />
          );
        })}
      </ol>
      {/* <button className="show-more-btn"
        onClick={() => {
          setLimit((prevLimit) => prevLimit + 5);
        }}
      >
        Show more
      </button> */}
      {isOpen ? (
        <ModalWindow
          handleModal={() => setIsOpen(false)}
          currency={selectedCurrency}
        />
      ) : null}
    </div>
  );
};
