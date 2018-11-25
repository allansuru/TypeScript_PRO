interface Order {
    id: string;
    amount: number;
    currency: string;
}

interface Stripe {
    card: string;
    cvc: string;
}

interface PayPal {
    email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
type CheckoutABC = Order & { name: string };

const order: Order = {
    id: 'xy12a',
    amount: 100,
    currency: 'USD'
};

const orderCard: CheckoutCard = {
    card: '1000 2000 3000 4000',
    cvc: '123',
    ...order
}

const orderPayPal: CheckoutPayPal = {
    ...order,
    email: 'allansuru@hotmail.com'
}

const otherOrder: CheckoutABC = {
    ...order,
    name: 'Ronaldinho'
}

const assigned = Object.assign({}, order, orderCard);

console.log('Assigned: ', assigned);
