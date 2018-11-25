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

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
type CheckoutABC = Order & { name: string };

const order: Order = {
    id: 'xy12a',
    amount: 100,
    currency: 'USD'
};

const orderCard: CheckoutCard = {
    type: 'stripe',
    card: '1000 2000 3000 4000',
    cvc: '123',
    ...order
}

const orderPayPal: CheckoutPayPal = {
    type: "paypal",
    ...order,
    email: 'allansuru@hotmail.com',
}

const otherOrder: CheckoutABC = {
    ...order,
    name: 'Ronaldinho'
}

const assigned = Object.assign({}, order, orderCard);


console.log('Assigned: ', assigned);

type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload) {
    if (payload.type === 'stripe') {
        console.log(payload.card, payload.cvc);
    } 
    if (payload.type == 'paypal') {
        console.log(payload.email);
        
    }
}

const check = checkout(assigned);
console.log(check);

