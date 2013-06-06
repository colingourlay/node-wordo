var _ = require('lodash');
var wordo = require('../lib');

var wordoExample = {};

wordoExample.combos = _.flatten(
    _.map(wordo.adjectives.all, function (adjective) {
        return _.map(wordo.nouns.all, function (noun) {
            return adjective + ' ' + noun;
        });
    })
);

wordoExample.shuffledCombos = _.shuffle(wordoExample.combos);

if (window) {
    _.assign(window, {
        _: _,
        wordo: wordo,
        wordoExample: wordoExample
    });
}