/* eslint-env node, mocha */
const chai = require('chai')
const chaiHttp = require('chai-http')
const Server = require('../app/server.js')

const server = new Server()
server.run()
const should = chai.should()
const app = server.app
chai.use(chaiHttp)

let userCreate

describe('Server', () => {
  it('should get a message error with bad url in 404', (done) => {
    const result = '{"code":404,"message":"Not Found"}'

    chai
      .request(app)
      .get('/notexist/notexist')
      .end((err, res) => {
        res.should.have.status(404)

        const response = JSON.parse(JSON.stringify(res.body))

        JSON.stringify(response).should.be.eql(result)
    })
    done() 
  })
})


describe('/users', () => {
  it('users/create should respond 200', (done) => {
    const arg = {
      'email': 'alexandre.houmeau#@gmail.com',
      'password': 'azertyuiop'
    }
    const rep = {
      'image_profil':
        'https://tel.img.pmdstatic.net/fit/http.3A.2F.2Fimages.2Eone.2Eprismamedia.2Ecom.2FproviderPerson.2Fb.2Fa.2F1.2F5.2Ff.2F7.2Fb.2Ff.2Fb.2F2.2F6.2Fc.2Fe.2F7.2Ff.2Ff.2Ejpeg/300x300/quality/80/tyrion-lannister.jpeg',
      'email': 'alexandre.houmeau#@gmail.com',
      'password': 'azertyuiop'
    }
  
    chai
      .request(app)
      .post('/users/create')
      .send(arg)
      .end((err, res) => {
        res.should.have.status(200)

        const response = JSON.stringify(res.text)
        userCreate = JSON.parse(JSON.stringify(response))

        delete response.id

        JSON.stringify(response).should.be.eql(rep)
    })

    done() 
  })

  it('users/show should get a sepecific user by id', (done) => {
    chai
      .request(app)
      .post(`/users/show/${userCreate.id}`)
      .send(arg)
      .end((err, res) => {
        res.should.have.status(200)

        const response = JSON.stringify(res.text)
        userCreate = JSON.parse(JSON.stringify(response))

        JSON.stringify(response).should.be.eql(userCreate)
    })

    done() 
  })
})
