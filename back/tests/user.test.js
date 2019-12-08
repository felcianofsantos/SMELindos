const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/users')

beforeAll(async () =>{
    await User.deleteMany()
})

test('Should call GET method successfuly', async() => {
    await request(app).get('/users').expect(200)
})

test('Should call POST method successfuly and create new user', async() => {
    await request(app)
        .post('/users')
        .send({
            name: 'Teste',
            email: "test@gmail.com",
            password: 'meusegredo'
        })
        .expect(201)
})