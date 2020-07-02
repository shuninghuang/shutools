import "mocha";
import "should";
import {compose} from "..";

describe('compose', () => {
    it('example', () => {
        const addOne = (num: number) => num + 1;
        const multi = (num: number) => num * num;

        const addAndMulti = compose<number, number>(multi, addOne);
        addAndMulti(5).should.equal(36);
    })
})