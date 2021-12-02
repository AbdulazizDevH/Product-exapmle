const Usd = (props) => {
  return (
    <div className="price-card">
      <h3>{props.price_title}</h3>
      <p>{props.text_p_1}</p>
      <div className="usd">
        <h1>{props.usd}</h1>
        <div className="usd-symbol">
          <h3>{props.usd_symbol}</h3>
          <span>{props.month}</span>
        </div>
      </div>
      <p>{props.text_p_2}</p>
      <p>{props.text_p_3}</p>
      <p>{props.text_p_4}</p>
      <button>Order Now</button>
    </div>
  );
};

const PriceTable = (props) => {
  return (
    <div className="price-table" id="Pricing">
      <h2>{props.text_h2}</h2>
      <p>{props.text_p}</p>
      <div className="price-group">
        <Usd
          price_title="Free"
          text_p_1="Brief price description"
          usd="0"
          usd_symbol="$"
          month="Per / month"
          text_p_2="Only 2 Operators"
          text_p_3="Notifications"
          text_p_4="Landing Pages"
        />

        <Usd
          price_title="Standart"
          text_p_1="Brief price description"
          usd="5"
          usd_symbol="$"
          month="Per / month"
          text_p_2="5+ Operators"
          text_p_3="Notifications"
          text_p_4="Landing Pages"
        />

        <Usd
          price_title="Premium"
          text_p_1="Brief price description"
          usd="10"
          usd_symbol="$"
          month="Per / month"
          text_p_2="10+ Operators"
          text_p_3="Notifications"
          text_p_4="Landing Pages"
        />
      </div>
    </div>
  );
};

export default function Price() {
  return (
    <>
      <PriceTable text_h2="Price Table" text_p="We offer competitive price" />
    </>
  );
}
