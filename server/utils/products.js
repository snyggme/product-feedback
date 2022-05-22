const products = [
    { 
        name: 'Google',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum eget mauris luctus, id ullamcorper sapien posuere. Morbi mollis erat quam, a porttitor odio tincidunt at. Nullam eu eros accumsan justo semper tincidunt ac in justo. Morbi pretium est sit amet diam aliquet iaculis. Curabitur non leo sed ipsum sodales maximus vel nec arcu. Maecenas luctus sapien eget rutrum placerat. Aenean feugiat malesuada imperdiet.',
        feedbacks: [
            {
                id: 1,
                title: 'add tags for coolness',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 123,
                type: 'feature',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 4,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 5,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 2,
                title: 'add image/video upload',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 8,
                type: 'Enhancement',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 3,
                title: 'add dark theme option',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 74,
                type: 'Bug',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 4,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 12,
                title: 'add ability to follow others',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 123,
                type: 'feature',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: [
                            {
                                id: 3,
                                username: 'alice',
                                text: 'nested comment',
                                childs: [
                                    {
                                        id: 5,
                                        username: 'clara',
                                        text: 'nested clara comment',
                                        childs: [] 
                                    },
                                    {
                                        id: 6,
                                        username: 'derel',
                                        text: 'nested derel comment',
                                        childs: [
                                            {
                                                id: 7,
                                                username: 'sally',
                                                text: 'nested sally commentssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                                                childs: [] 
                                            },
                                            {
                                                id: 8,
                                                username: 'jim',
                                                text: 'nested jim comment',
                                                childs: [] 
                                            }
                                        ] 
                                    }
                                ] 
                            },
                            {
                                id: 4,
                                username: 'jhon',
                                text: 'nested comment',
                                childs: [] 
                            }
                        ]
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            }
        ]
    },
    { 
        name: 'VK',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum eget mauris luctus, id ullamcorper sapien posuere. Morbi mollis erat quam, a porttitor odio tincidunt at. Nullam eu eros accumsan justo semper tincidunt ac in justo. Morbi pretium est sit amet diam aliquet iaculis. Curabitur non leo sed ipsum sodales maximus vel nec arcu. Maecenas luctus sapien eget rutrum placerat. Aenean feugiat malesuada imperdiet.',
        feedbacks: [
            {
                id: 1,
                title: 'add tags for coolness',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 123,
                type: 'feature',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 4,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 5,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 2,
                title: 'add image/video upload',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 8,
                type: 'Enhancement',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 3,
                title: 'add dark theme option',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 74,
                type: 'Bug',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 4,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 12,
                title: 'add ability to follow others',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 123,
                type: 'feature',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: [
                            {
                                id: 3,
                                username: 'alice',
                                text: 'nested comment',
                                childs: [
                                    {
                                        id: 5,
                                        username: 'clara',
                                        text: 'nested clara comment',
                                        childs: [] 
                                    },
                                    {
                                        id: 6,
                                        username: 'derel',
                                        text: 'nested derel comment',
                                        childs: [
                                            {
                                                id: 7,
                                                username: 'sally',
                                                text: 'nested sally commentssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                                                childs: [] 
                                            },
                                            {
                                                id: 8,
                                                username: 'jim',
                                                text: 'nested jim comment',
                                                childs: [] 
                                            }
                                        ] 
                                    }
                                ] 
                            },
                            {
                                id: 4,
                                username: 'jhon',
                                text: 'nested comment',
                                childs: [] 
                            }
                        ]
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            }
        ]
    },
    { 
        name: 'Facebook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum eget mauris luctus, id ullamcorper sapien posuere. Morbi mollis erat quam, a porttitor odio tincidunt at. Nullam eu eros accumsan justo semper tincidunt ac in justo. Morbi pretium est sit amet diam aliquet iaculis. Curabitur non leo sed ipsum sodales maximus vel nec arcu. Maecenas luctus sapien eget rutrum placerat. Aenean feugiat malesuada imperdiet.',
        feedbacks: [
            {
                id: 1,
                title: 'add tags for coolness',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 123,
                type: 'feature',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 4,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 5,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 2,
                title: 'add image/video upload',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 8,
                type: 'Enhancement',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 3,
                title: 'add dark theme option',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 74,
                type: 'Bug',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 4,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 12,
                title: 'add ability to follow others',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 123,
                type: 'feature',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: [
                            {
                                id: 3,
                                username: 'alice',
                                text: 'nested comment',
                                childs: [
                                    {
                                        id: 5,
                                        username: 'clara',
                                        text: 'nested clara comment',
                                        childs: [] 
                                    },
                                    {
                                        id: 6,
                                        username: 'derel',
                                        text: 'nested derel comment',
                                        childs: [
                                            {
                                                id: 7,
                                                username: 'sally',
                                                text: 'nested sally commentssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                                                childs: [] 
                                            },
                                            {
                                                id: 8,
                                                username: 'jim',
                                                text: 'nested jim comment',
                                                childs: [] 
                                            }
                                        ] 
                                    }
                                ] 
                            },
                            {
                                id: 4,
                                username: 'jhon',
                                text: 'nested comment',
                                childs: [] 
                            }
                        ]
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            }
        ]
    },
    { 
        name: 'Yandex',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum eget mauris luctus, id ullamcorper sapien posuere. Morbi mollis erat quam, a porttitor odio tincidunt at. Nullam eu eros accumsan justo semper tincidunt ac in justo. Morbi pretium est sit amet diam aliquet iaculis. Curabitur non leo sed ipsum sodales maximus vel nec arcu. Maecenas luctus sapien eget rutrum placerat. Aenean feugiat malesuada imperdiet.',
        feedbacks: [
            {
                id: 1,
                title: 'add tags for coolness',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 123,
                type: 'feature',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 4,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 5,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 2,
                title: 'add image/video upload',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 8,
                type: 'Enhancement',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 3,
                title: 'add dark theme option',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 74,
                type: 'Bug',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 4,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 12,
                title: 'add ability to follow others',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 123,
                type: 'feature',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: [
                            {
                                id: 3,
                                username: 'alice',
                                text: 'nested comment',
                                childs: [
                                    {
                                        id: 5,
                                        username: 'clara',
                                        text: 'nested clara comment',
                                        childs: [] 
                                    },
                                    {
                                        id: 6,
                                        username: 'derel',
                                        text: 'nested derel comment',
                                        childs: [
                                            {
                                                id: 7,
                                                username: 'sally',
                                                text: 'nested sally commentssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                                                childs: [] 
                                            },
                                            {
                                                id: 8,
                                                username: 'jim',
                                                text: 'nested jim comment',
                                                childs: [] 
                                            }
                                        ] 
                                    }
                                ] 
                            },
                            {
                                id: 4,
                                username: 'jhon',
                                text: 'nested comment',
                                childs: [] 
                            }
                        ]
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            }
        ]
    },
    { 
        name: 'Yahoo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum eget mauris luctus, id ullamcorper sapien posuere. Morbi mollis erat quam, a porttitor odio tincidunt at. Nullam eu eros accumsan justo semper tincidunt ac in justo. Morbi pretium est sit amet diam aliquet iaculis. Curabitur non leo sed ipsum sodales maximus vel nec arcu. Maecenas luctus sapien eget rutrum placerat. Aenean feugiat malesuada imperdiet.',
        feedbacks: [
            {
                id: 1,
                title: 'add tags for coolness',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 123,
                type: 'feature',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 4,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 5,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 2,
                title: 'add image/video upload',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 8,
                type: 'Enhancement',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 3,
                title: 'add dark theme option',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 74,
                type: 'Bug',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 3,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                    {
                        id: 4,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            },
            {
                id: 12,
                title: 'add ability to follow others',
                description: 'Easier to search for solutions based on a specific stack',
                votes: 123,
                type: 'feature',
                comments: [
                    {
                        id: 1,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: [
                            {
                                id: 3,
                                username: 'alice',
                                text: 'nested comment',
                                childs: [
                                    {
                                        id: 5,
                                        username: 'clara',
                                        text: 'nested clara comment',
                                        childs: [] 
                                    },
                                    {
                                        id: 6,
                                        username: 'derel',
                                        text: 'nested derel comment',
                                        childs: [
                                            {
                                                id: 7,
                                                username: 'sally',
                                                text: 'nested sally commentssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
                                                childs: [] 
                                            },
                                            {
                                                id: 8,
                                                username: 'jim',
                                                text: 'nested jim comment',
                                                childs: [] 
                                            }
                                        ] 
                                    }
                                ] 
                            },
                            {
                                id: 4,
                                username: 'jhon',
                                text: 'nested comment',
                                childs: [] 
                            }
                        ]
                    },
                    {
                        id: 2,
                        username: 'bob',
                        text: 'uuuuu doing comments',
                        childs: []
                    },
                ]
            }
        ]
    },
]

function getProducts(name = '') {
    if (name === '')
        return products;

    return products.find(product => product.name.toLowerCase() === name.toLowerCase());
}

module.exports = {
    getProducts
}