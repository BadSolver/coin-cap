// @ts-nocheck
import { useSelector } from "react-redux";
import "./style.css";

export const DetailPage = () => {
  const detailCurrency = useSelector((state) => state.detail.detail);

  return (
    <div className="container">
      {detailCurrency.explorer && (
        <div>
          <h1 className="heading">Полная информация о валюте:</h1>
          <div className="info-list">
            <div className="info-item">
              <span className="info-label">Уникальное сокращение:</span>
              <span className="info-value">{detailCurrency.id}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Уникальный номер:</span>
              <span className="info-value">{detailCurrency.rank}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Уникальный символ:</span>
              <span className="info-value">{detailCurrency.symbol}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Уникальное имя:</span>
              <span className="info-value">{detailCurrency.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Запас:</span>
              <span className="info-value">{detailCurrency.supply}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Рыночная стоимость:</span>
              <span className="info-value">
                {detailCurrency.marketCapUsd} $
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">
                Изменения за последние 24 часа:
              </span>
              <span className="info-value">
                {detailCurrency.volumeUsd24Hr} %
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Стоимость:</span>
              <span className="info-value">{detailCurrency.priceUsd} $</span>
            </div>
            <div className="info-item">
              <span className="info-label">Курс за 24 часа:</span>
              <span className="info-value">
                {detailCurrency.changePercent24Hr} %
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">VWAP:</span>
              <span className="info-value">{detailCurrency.vwap24Hr}</span>
            </div>
          </div>
          <a
            className="link"
            href={detailCurrency.explorer}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ссылка на платформу
          </a>
        </div>
      )}
    </div>
  );
};
