const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  gender: String,
  height: Number,
  weight: Number,
  city: String,
  cityCode: Number,
  street_number: Number,
  street_type: String,
  street_name: String,
  phone: String,
  image_profil: {
    type: String,
    default: 'https://tel.img.pmdstatic.net/fit/http.3A.2F.2Fimages.2Eone.2Eprismamedia.2Ecom.2FproviderPerson.2Fb.2Fa.2F1.2F5.2Ff.2F7.2Fb.2Ff.2Fb.2F2.2F6.2Fc.2Fe.2F7.2Ff.2Ff.2Ejpeg/300x300/quality/80/tyrion-lannister.jpeg'
  }
}, {
  collection: 'users', 
  minimize: false, 
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = Schema
