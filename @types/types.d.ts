interface Order {
    id: string;
    amount: number;
    currency: string;
}
interface Stripe {
    type: 'stripe';
    card: string;
    cvc: string;
}
interface PayPal {
    type: 'paypal';
    email: string;
}
declare type CheckoutCard = Order & Stripe;
declare type CheckoutPayPal = Order & PayPal;
declare type CheckoutABC = Order & {
    name: string;
};
declare const order: Order;
declare const orderCard: CheckoutCard;
declare const orderPayPal: CheckoutPayPal;
declare const otherOrder: CheckoutABC;
declare const assigned: CheckoutCard;
declare type Payload = CheckoutCard | CheckoutPayPal;
declare function checkout(payload: Payload): void;
declare const check: void;
