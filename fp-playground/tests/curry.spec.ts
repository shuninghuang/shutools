import "mocha";
import "should";
import {curry} from "../curry";

describe('curry', () => {
    it('curried match', () => {
        const match = curry<RegExp, string, RegExpMatchArray | null>((reg: RegExp, str: string) => str.match(reg));
        const matcher = match(/hi/g);
        const matches = matcher('hi you');

        (matches![0]).should.equal('hi');
    })
})