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

export function addFeedbackComment(productName, comment, commentsId, username = 'jimbo', messageId = -1) {
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
    // make id unique
    
    if (messageId < 0) {
        products[productNameIndex].feedbacks[feedbacksIndex].comments.push({ id: 99, username, text: comment, childs: [] })
        return
    }
        
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
            // filter everything after founded item
            if (item.here) stopFilter = true;

            return true;
        })
        // delete empty branches so in array "filteredWhere" will be correct path to desired element 
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

    const addComment = (arr, path) => {
        if (path[path.length - 1].depth === 0) {
            arr[path[path.length - 1].index].childs.push({ id: 99, username, text: comment, childs: [] })
            return
        }

        const pushComment = (arr, path) => {
            if (path.length > 1)
                pushComment(arr[path[0].index].childs, path.slice(1))
            else    
                arr[path[0].index].childs.push({ id: 99, username, text: comment, childs: [] })
        }
        
        pushComment(arr[path[0].index].childs, path.slice(1))

    }

    addComment(products[productNameIndex].feedbacks[feedbacksIndex].comments, path)
}

export function calculateLength(arr) {
    if (typeof arr === 'undefined') 
        return 0;
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

export const getProduct = (products, name) => 
    products.find(product => product.name.toLowerCase() === name.toLowerCase())

export const getFilteredItems = (products, productId, activeType, filter) => {
    const product = getProduct(products, productId);
    const feedbacks = product.feedbacks
    .filter(f => {
        if (activeType.toLocaleLowerCase() === 'all')
            return true;
        
        return f.type.toLocaleLowerCase() === activeType.toLocaleLowerCase();
    })
    .sort((a, b) => {
        switch (filter) {
            case 'Most Upvotes':
                return b.votes - a.votes;
            case 'Most Comments':
                return calculateLength(b.comments) - calculateLength(a.comments);
            case 'Least Upvotes':
                return a.votes - b.votes;
            case 'Least Comments':
                return calculateLength(a.comments) - calculateLength(b.comments);
            default:
                return 0;
        }
    });

    return feedbacks;
}

export const flatComments = (c) => {
    let arr = [];

    const setWidth = ({ username, text, childs, id }, width) => {
        if (width < 35) width = 35;

        arr.push({ username, text, width, id });

        if (childs.length > 0) childs.map(child => setWidth(child, width - 13))
    }

    c.map(comment => setWidth(comment, 100))

    return arr;
}