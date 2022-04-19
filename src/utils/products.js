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

export function getProducts(name = '') {
    if (name === '')
        return products;

    return products.find(product => product.name.toLowerCase() === name.toLowerCase());
}

export function addFeedbackComment(productName, comment, commentsId, username = 'jimbo', messageId) {
    let productNameIndex;
    let feedbacksIndex;

    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase() === productName.toLowerCase()) {
            productNameIndex = i;
            break;
        }
    }

    for (let i = 0; i < products[productNameIndex].feedbacks.length; i++) {
        if (products[productNameIndex].feedbacks[i].id === Number(commentsId)) {
            feedbacksIndex = i;
            break;
        }
    }

    // TODO
    // test ability to add comments for 0 level of nestedness: see component AddComment.js

    // products[productNameIndex].feedbacks[feedbacksIndex].comments.push({ username, text: comment, childs: [] })
    const findPathToElement = (arr) => {
        let where = [];

        const f = (arr, depth) => {
            arr.map((item, i) => {
                if (item.id === messageId) {
                    where.push({ index: i, depth, here: true })
                } else if (item.childs.length > 0) {
                    where.push({ index: i, depth, here: false })
                    f(item.childs, ++depth)
                    depth--;
                }
            })
        }

        f(arr, 0)

        let stopFilter = false;

        let filteredWhere = where.filter(item => {
            if (stopFilter) return false;

            if (item.here) stopFilter = true;

            return true;
        })
        // delete empty branches so in array "where" will be the correct path to desired element 
        while(filteredWhere.length > 2 && filteredWhere[filteredWhere.length - 1].depth <= filteredWhere[filteredWhere.length - 2].depth) {
            filteredWhere.splice(filteredWhere.length - 2, 1)
        }

        return filteredWhere;
    }
    // with path variable we can find any nested comment to travers to it
    // path = [{ index0, depth0 }, {index1, depth1}, ...]
    const path = findPathToElement(products[productNameIndex].feedbacks[feedbacksIndex].comments)

    // TODO
    // make id unique

    const f = (arr, path) => {
        if (path[path.length - 1].depth === 0) {
            arr[path[path.length - 1].index].childs.push({ id: 99, username, text: comment, childs: [] })
            return
        }

        const g = (arr, path) => {
            if (path.length > 1)
                g(arr[path[0].index].childs, path.slice(1))
            else    
                arr[path[0].index].childs.push({ id: 99, username, text: comment, childs: [] })
        }
        
        g(arr[path[0].index].childs, path.slice(1))

    }

    f(products[productNameIndex].feedbacks[feedbacksIndex].comments, path)
}

export function calculateLength(arr) {
    let len = 0;

    const calculate = (arr) => {
        arr.forEach(element => {
            len++;
            if (element.childs.length > 0) calculate(element.childs)
        });
    } 

    calculate(arr);

    return len;
}
