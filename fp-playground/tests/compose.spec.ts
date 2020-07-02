import "mocha";
import "should";
import {compose} from "..";

describe('compose', () => {
    it('example', () => {
        const addOne = (num: number) => num + 1;
        const multi = (num: number): string => `final result is: ${num * num}`;

        const addAndMulti = compose<string, number>(multi, addOne);
        addAndMulti(5).should.equal(multi(6));
    })
})