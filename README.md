# wordo

A collection of words, broken down by classification

[![NPM](https://nodei.co/npm/wordo.png)](https://nodei.co/npm/wordo/)

## Example

```
var wordo = require('wordo');
var _ = require('lodash');

var colouredAnimals = _.flatten(
    _.map(wordo.adjectives.colour, function (colour) {
        return _.map(wordo.nouns.animals, function (animal) {
            return colour + ' ' + animal;
        });
    })
);

console.log(colouredAnimals[0]); // "beige aardvark"

```

## Install

With [npm](https://npmjs.org) do:

```
npm install wordo
```

## Limitations

So far only contains a list of adjectives and nouns. Nouns are only divided into animals and other at this stage.

## license

MIT


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/colingourlay/node-wordo/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

