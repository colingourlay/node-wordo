var _ = require('lodash');

var size = require('./size');
var shape = require('./shape');
var time = require('./time');
var quantity = require('./quantity');
var sound = require('./sound');
var taste = require('./taste');
var touch = require('./touch');
var colour = require('./colour');
var numbers = require('./numbers');
var feelings = require('./feelings');
var condition = require('./condition');
var appearance = require('./appearance');

var all = _([
    size,
    shape,
    time,
    quantity,
    sound,
    taste,
    touch,
    colour,
    numbers,
    feelings,
    condition,
    appearance
]).flatten().uniq().valueOf().sort();

module.exports = {
    size: size,
    shape: shape,
    time: time,
    quantity: quantity,
    sound: sound,
    taste: taste,
    touch: touch,
    colour: colour,
    numbers: numbers,
    feelings: feelings,
    condition: condition,
    appearance: appearance,
    all: all
};