var _ = require('lodash');

var animals = require('./animals');
var other = require('./other');

var all = _([
    animals,
    other
]).flatten().uniq().valueOf().sort();

module.exports = {
    animals: animals,
    other: other,
    all: all
};