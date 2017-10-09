const Calculator = require('./../js/pingpong.js').calculatorModule;

describe('Calculator', ()=>{
  let testCalculator;

  beforeEach(()=>{
    testCalculator = new Calculator('blue');
  });

  it('should correctly show skincolor', ()=>{
    expect(testCalculator.skin).toEqual('blue');
  })

  it('should return [1,2,"ping"] when call pingpong(3)', ()=>{
    expect(testCalculator.pingPong(3)).toEqual([1,2,'ping']);
  });
});
