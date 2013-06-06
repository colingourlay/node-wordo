# wordo

A collection of words, broken down by classification

# example

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

console.log(colouredAnimals[0]);

//

```

# limitations

So far only contains a list of adjectives and nouns. Nouns are only divided into animals and other at this stage.

# install

With [npm](https://npmjs.org) do:

```
npm install wordo
```

# license

MIT