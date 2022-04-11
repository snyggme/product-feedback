import ProductItem from './ProductItem';

function Products() {
    return (
        <div className='products-container'>
            {
                products.map(item => {
                    console.log(item)
                    return <ProductItem {...item} key={item.name}/>
                })
            }
        </div>
    )
}

const products = [
    { 
        name: 'Google',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum eget mauris luctus, id ullamcorper sapien posuere. Morbi mollis erat quam, a porttitor odio tincidunt at. Nullam eu eros accumsan justo semper tincidunt ac in justo. Morbi pretium est sit amet diam aliquet iaculis. Curabitur non leo sed ipsum sodales maximus vel nec arcu. Maecenas luctus sapien eget rutrum placerat. Aenean feugiat malesuada imperdiet.'
    },
    { 
        name: 'VK',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum eget mauris luctus, id ullamcorper sapien posuere. Morbi mollis erat quam, a porttitor odio tincidunt at. Nullam eu eros accumsan justo semper tincidunt ac in justo. Morbi pretium est sit amet diam aliquet iaculis. Curabitur non leo sed ipsum sodales maximus vel nec arcu. Maecenas luctus sapien eget rutrum placerat.'
    },
    { 
        name: 'FACEBOOK',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum eget mauris luctus, id ullamcorper sapien posuere. Morbi mollis erat quam, a porttitor odio tincidunt at. Nullam eu eros accumsan justo semper tincidunt ac in justo. Morbi pretium est sit amet diam aliquet iaculis.'
    },
    { 
        name: 'YANDEX',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum eget mauris luctus, id ullamcorper sapien posuere. Morbi mollis erat quam, a porttitor odio tincidunt at. '
    },
    { 
        name: 'YAHOO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum eget mauris luctus, id ullamcorper sapien posuere. Morbi mollis erat quam, a porttitor odio tincidunt at. Nullam eu eros accumsan justo semper tincidunt ac in justo. Morbi pretium est sit amet diam aliquet iaculis. Curabitur non leo sed ipsum sodales maximus vel nec arcu. Maecenas luctus sapien eget rutrum placerat. Aenean feugiat malesuada imperdiet.'
    }
]

export default Products;