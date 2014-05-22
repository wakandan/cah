'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var RoomSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

/**
 * Validations
 */
RoomSchema.path('name').validate(function(title) {
    return title.length;
}, 'Room name cannot be blank');

/**
 * Statics
 */
RoomSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('users', 'name username').exec(cb);
};

mongoose.model('Room', RoomSchema);
