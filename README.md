# wordo

A collection of words, broken down by classification

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