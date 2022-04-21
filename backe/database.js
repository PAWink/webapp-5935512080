const bcrypt = require('bcrypt')

let users = {
    users: [
        { id: 1, username: 'warodom', password: '$2b$10$0AsMSQaUB0AlLnKzgeUOfOE.hWUodtuR4NOU954XLVy2gy3lBWsdO', email: 'wwarodom@gmail.com' },
        { id: 2, username: 'john', password: '$2b$10$1Bu4tImM/Ms9rtU.8/n/COWpzUAGFB6YlsO5xZqFih1JUxafyFFXa', email: 'john@gmail.com' },
    ]
}
const products = [
    {id: 1,productsname:'Fantastic Beasts 3: The Secrets of Dumbledore',discription:'ความลับของดับเบิลดอร์',price: 250,imageurl:'https://media.timeout.com/images/105880083/1024/576/image.jpg'},
    {id: 2,productsname:'SLR กล้อง ติด ตาย',discription:'หนังสยองขวัญ',price: 200,imageurl:'https://image.springnews.co.th/uploads/images/md/2022/04/gaqWYjhtx83gdBSD2ETT.webp?x-image-process=style/lg-webp'},
    {id: 3,productsname:'The Lost City ผจญภัยนครสาบสูญ',discription:'หนังผจญภัย',price: 150,imageurl:'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1600/https://sls-prod.api-onscene.com/partner_files/trueidintrend/276472/cover_image/55F82024-EA29-4245-B8F7-6E2BF0EF803A.png'},
    {id: 4,productsname:'Sonic the Hedgehog 2',discription:'เจ้าเม่นสายฟ้า',price: 180,imageurl:'https://www.dailynews.co.th/wp-content/uploads/2022/03/Website-Template-1100x6205-15.jpg'},
    {id: 5,productsname:'แดง พระโขนง',discription:'หนังผีไทย',price: 200,imageurl:'https://s.isanook.com/mv/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL212LzAvdWQvMjQvMTIwNDg5L3VudGl0bGVkLTEuanBn.jpg'}
        ]
let carts = [
    {id: 1,productsname:'Fantastic Beasts 3',discription:'ความลับของดับเบิลดอร์',price: 250,imageurl:'https://media.timeout.com/images/105880083/1024/576/image.jpg',
    amount:3,userid:2},
    {id: 2,productsname:'SLR กล้อง ติด ตาย',discription:'หนังสยองขวัญ',price: 200,imageurl:'https://image.springnews.co.th/uploads/images/md/2022/04/gaqWYjhtx83gdBSD2ETT.webp?x-image-process=style/lg-webp'},
    {id: 3,productsname:'The Lost City ผจญภัยนครสาบสูญ',discription:'หนังผจญภัย',price: 150,imageurl:'https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1600/https://sls-prod.api-onscene.com/partner_files/trueidintrend/276472/cover_image/55F82024-EA29-4245-B8F7-6E2BF0EF803A.png',
    amount:4,userid:2}

]
const SECRET = 'your_jwt_secret'
const NOT_FOUND = -1

exports.users = users 
exports.SECRET = SECRET
exports.NOT_FOUND = NOT_FOUND
exports.products = products
exports.carts = carts
exports.setUsers = function(_users) { 
  users = _users;
}

// === validate username/password ===
exports.isValidUser = async (username, password) => { 
    const index = users.users.findIndex(item => item.username === username) 
    return await bcrypt.compare(password, users.users[index].password)
}

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
    return users.users.findIndex(item => item.username === username)
}
