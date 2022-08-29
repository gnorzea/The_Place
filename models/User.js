const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
   username: {
    type: String,
    unique: true,
    required: 'Please provide a username',
    trim: true
   },
   email: {
    type: String,
    unique: true,
    required: 'Please provide an email address',
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
   },
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

UserSchema.virtual('friendCount').get(function(){
    return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;