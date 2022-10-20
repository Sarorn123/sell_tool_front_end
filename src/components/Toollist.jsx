import "../styles/cardsection.scss";
import { Card } from "./Card";

export const Toollist = () => {
  return (
    <div className=" card-section">
      <div className="section-name">
        <h3>Product Overview</h3>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
