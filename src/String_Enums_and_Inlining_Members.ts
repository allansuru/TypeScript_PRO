enum Sizes2 {
 Small = 'small',
 Medium = 'medium',
 Large = 'large',   
}

let selected: Sizes2 = Sizes2.Small;

function updateSize(size: Sizes2): void {
    selected = size;
}

updateSize(Sizes2.Medium);

console.log(selected);
