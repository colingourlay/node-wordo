var _ = require('lodash');

var adjectives = require('./adjectives');
var nouns = require('./nouns');

var all = _([
    adjectives.all,
    nouns.all
]).flatten().uniq().valueOf().sort();

module.exports = {
    adjectives: adjectives,
    nouns: nouns,
    all: all
};