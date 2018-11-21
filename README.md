# time-buried
Buried time point.

[![npm version](https://badge.fury.io/js/time-buried.svg)](https://badge.fury.io/js/time-buried)
[![Package Quality](http://npm.packagequality.com/shield/time-buried.svg)](http://packagequality.com/#?package=time-buried)

# Install

```
$ npm install time-buried
```

# Burying start time and end time

```javascript
const TimeBuried = require('time-buried');
const tB = new TimeBuried();

tB.start('launch');

setTimeout(() => {
    tB.end('launch');
    const value = tB.getValue('launch');
    
    // print: { startTimestamp: 1542784622547, endTimestamp: 1542784623551, diff: 1004 }
    console.log(value);
})
```

# Mutil points

```javascript
const TimeBuried = require('time-buried');
const tB = new TimeBuried();

tB.start('launch');
tB.start('init');

setTimeout(() => {
    tB.end('launch');
    tB.end('init');
    const allValue = tB.getAllValue();
    
    // print: 
    // { 
    //     launch: { startTimestamp: 1542784622547,endTimestamp: 1542784623551, diff: 1004 },
    //     init: { startTimestamp: 1542784802011, endTimestamp: 1542784803013, diff: 1002 },
    // }
    console.log(allValue);
})
```

# Just Print

```javascript
const TimeBuried = require('time-buried');
const tB = new TimeBuried();

tB.start('launch');
tB.start('init');

setTimeout(() => {
    tB.end('launch');
    tB.end('init');

    // print:
    // Time Recorder: ---- launch: 1002ms
    // Time Recorder: ---- init: 1004ms
    tB.printAll();
})
```