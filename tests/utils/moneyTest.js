import {formatCurrency} from '../../scripts/utils/money.js';
describe('test suite: formatCurrency',()=>
{
    it('converts cents into dollars',()=>
    {
      expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('Works with 0',()=>
    {
      expect(formatCurrency(0)).toEqual('0.00');
    });
    it('rounds up to nearest cent',()=>
      {
        expect(formatCurrency(2000.5)).toEqual('20.01');
      });
      it('round down to the nearest cent',()=>
      {
        expect(formatCurrency(2000.4)).toEqual('20.00');
      });
      it('negative number',()=>
      {
        expect(formatCurrency(-500)).toEqual('-5.00');
      })
  })

