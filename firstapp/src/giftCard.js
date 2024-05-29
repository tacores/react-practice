import { useState } from "react";

export default function GiftCard() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {
        return {...prevState,
            text: "Your coupon has been used.",
            valid: false,
            instructions: "Please visit our restaurant to renew your gift card."}
    });
  }

  return (
    <div style={{padding: '40px'}}>
      <h2>
        Gift Card Page
      </h2>
      <h3>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h3>
      <h4>
        {giftCard.text}
      </h4>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
