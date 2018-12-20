# potsala-packet-dish

## Description
Complete a 'ポテサラパケットディッシュ'.

## Install
``` shell
npm install potsala-packet-dish
```

## Usage
```javascript
const Potsala = require('potsala-packet-dish');
const word = 'ポテサラ'
const potsala = new Potsala(word)
console.log(potsala.get() + 'パケットディッシュ！')
```

## Methods

### get()
get method is getting random value from instance.