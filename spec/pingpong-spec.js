const Calculator = require('./../js/pingpong.js').calculatorModule;

describe('Calculator', ()=>{
  it('should correctly show skincolor', ()=>{
    let testCalculator= new Calculator('blue');
    expect(testCalculator.skin).toEqual('blue');
  })
});
