let pizzaTamanho: string = 'small'

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaTamanho = size
}

selectSize('large');


console.log(`Pizza Size: ${pizzaTamanho}`);