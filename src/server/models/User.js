const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: String,
    lastname: String,
    avatar: {data: Buffer, contentType: String},
    post: String,
    phone: String,
    email: String,
    online: Boolean,
    lastActivity: { type: Date, default: Date.now },
    registrationTime: { type: Date, default: Date.now },
    tasks: [{type: Types.ObjectId, ref: 'Task'}]
})

module.exports = model('User', schema);