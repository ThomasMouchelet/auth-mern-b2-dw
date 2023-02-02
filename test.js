const body = {
    name: 'John',
    age: 30
}

const user = { // find One
    name: 'John',
    age: 30,
    password : "123456"
}

for(let key in body){
    user[key] = body[key]
}

// save user

// sign jwt (payload : user)