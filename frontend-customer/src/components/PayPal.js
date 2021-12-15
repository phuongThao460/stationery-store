import React, { useRef, useEffect } from "react";

export default function PayPal(props) {
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: "Thank you for your purchase",
                      amount: {
                        currency_code: "USD",
                        value: props.tong_gia,
                      },
                    },
                  ],
                });
              },
              onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                props.callback(order);
              },
              onError: (err) => {
                console.log(err);
              },
            })
            .render(paypal.current);
        }, []);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
