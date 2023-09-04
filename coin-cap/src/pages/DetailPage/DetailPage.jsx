// @ts-nocheck
import { useSelector } from "react-redux";
import "./style.css";
import { formatNumber } from "helpers";

export const DetailPage = () => {
  const {
    explorer,
    id,
    rank,
    symbol,
    name,
    supply,
    marketCapUsd,
    volumeUsd24Hr,
    priceUsd,
    changePercent24Hr,
    vwap24Hr,
  } = useSelector((state) => state.detail.detail);

  const detail = useSelector((state) => state.detail.detail);
  console.log(detail);
  return (
    <div className="container">
      {id && (
        <div>
          <h1 className="heading">Полная информация о валюте:</h1>
          <div className="info-list">
            <div className="info-item">
              <span className="info-label">Уникальное сокращение:</span>
              <span className="info-value">{id}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Уникальный номер:</span>
              <span className="info-value">{rank}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Уникальный символ:</span>
              <span className="info-value">{symbol}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Уникальное имя:</span>
              <span className="info-value">{name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Запас:</span>
              <span className="info-value">{formatNumber(supply, 4)}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Рыночная стоимость:</span>
              <span className="info-value">
                {formatNumber(marketCapUsd, 4)} $
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">
                Изменения за последние 24 часа:
              </span>
              <span
                className={`${
                  volumeUsd24Hr > 0
                    ? "info-value-positive"
                    : "info-value-negative"
                }`}
              >
                {formatNumber(volumeUsd24Hr, 4)} %
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Стоимость:</span>
              <span className="info-value">{formatNumber(priceUsd, 4)} $</span>
            </div>
            <div className="info-item">
              <span className="info-label">Курс за 24 часа:</span>
              <span
                className={`${
                  changePercent24Hr > 0
                    ? "info-value-positive"
                    : "info-value-negative"
                }`}
              >
                {formatNumber(changePercent24Hr, 4)} %
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">VWAP:</span>
              <span className="info-value">{formatNumber(vwap24Hr, 4)}</span>
            </div>
          </div>
          <a
            className="link"
            href={explorer}
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
