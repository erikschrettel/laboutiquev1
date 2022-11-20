//* Array de objetos

const arrayGuitars = [
    {
        id: 1,
        name: 'Gibson SG Robby Krieger',
        description: '50 Anniversary - 2011',
        price: 3000,
        img: '/assets/imgs/guitars/gibson/298036885_826491075390520_4833521146587079191_n.jpg',
        category: 'gibson',
    },
    {
        id: 2,
        name: 'Gibson Les Paul R9',
        description: 'Custom Shop - 2006',
        price: 4000,
        img: '/assets/imgs/guitars/gibson/r9.jpg',
        category: 'gibson',
    },
    {
        id: 3,
        name: 'PRS S2 Custom 22',
        description: 'Black Amber año 2020 USA',
        price: 2000,
        img: '/assets/imgs/guitars/prs/prs2.jpg',
        category: 'prs',
    },
    {
        id: 4,
        name: 'Ibanez FGM300 Frank Gambale',
        description: 'Color Desert Sun Yellow Año 1994',
        price: 2300,
        img: '/assets/imgs/guitars/ibanez/ibanez.jpg',
        category: 'ibanez',
    },
    {
        id: 5,
        name: 'Fender Stratocaster',
        description: 'Road Worn 60’s Año 2008',
        price: 3200,
        img: './assets/imgs/guitars/fender/stratocaster.jpg',
        category: 'fender',
    },
    {
        id: 6,
        name: 'Fender Telecaster',
        description: 'Road Worn 50’s Telecaster Año 2011',
        price: 2000,
        img: './assets/imgs/guitars/fender/telecaster.jpg',
        category: 'fender',
    },
    {
        id: 7,
        name: 'Fender Jaguar Johnny Marr',
        description: 'Año 2017 - Olympic White',
        price: 2000,
        img: './assets/imgs/guitars/fender/jaguar.jpg',
        category: 'fender',
    },
    {
        id: 8,
        name: 'Ibanez Roadstar II Deluxe RS505',
        description: 'Año 1983 made in japan',
        price: 2400,
        img: '/assets/imgs/guitars/ibanez/ibanez2.jpg',
        category: 'ibanez',
    },
{
    id: 9,
    name: 'Gibson Les Paul Tribute',
    description: 'Gold Top - 2018',
    price: 2800,
    img: '/assets/imgs/guitars/gibson/tribute.jpg',
    category: 'gibson',
},
    {
        id: 10, 
        name: 'PRS Custom 22',
        description: '20th anniversary año 2006',
        price: 2500,
        img: '/assets/imgs/guitars/prs/prs.jpg',
        category: 'prs',
    },
    {
        id: 11,
        name: 'Gibson ES-335',
        description: 'Cherry Dot Reissue - 2018',
        price: 3700,
        img: '/assets/imgs/guitars/gibson/335.jpg',
        category: 'gibson',
    },
    {
        id: 12,
        name: 'Gretsch G6137TCB',
        description: 'Black Panther Center Block Año 2013',
        price: 3800,
        img: '/assets/imgs/guitars/gretsch/gretsch.jpg',
        category: 'gretsch',
    },
]

// Para hacer la paginacion de Ver Más
// Usamos el array de productos y lo dividimos en arrays de size elementos
const splitProducts = size => {
    let dividedProducts = [];
    for (let i = 0; i < arrayGuitars.length; i += size) {
    dividedProducts.push(arrayGuitars.slice(i, i + size));
    }
    return dividedProducts;
};

  // Guardamos en variable un objeto para dividir los productos en arrays de 6 y manejar la paginacion
const productsController = {
    dividedProducts: splitProducts(8),
    nextProductsIndex: 1,
    productsLimit: splitProducts(8).length,
};

console.log(productsController);