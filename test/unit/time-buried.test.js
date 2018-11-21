const TimeBuried = require('../../src/time-buried');

describe('TimeBuried', () => {
  it('should recorded start and end', () => {
    const tBuried = new TimeBuried();
    tBuried.start('launch');

    return new Promise((resolve) => {
      setTimeout(() => {
        tBuried.end('launch');
        tBuried.printAll();
        tBuried.print();
        const value = tBuried.getValue('launch');
        console.log(value);

        console.log(tBuried.getValue());

        const allValue = tBuried.getAllValue();
        console.log(allValue);
        resolve();
      }, 1000);
    });
  });
});