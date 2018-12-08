type Size = 'small' | 'medium' | 'large'

let pizzaSize: Size = 'small';

const selectSizeA = (size: Size) => {
    pizzaSize = size;
}

selectSizeA('small');