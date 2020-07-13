import "mocha";
import "should";
import { Maybe, curry } from "..";

describe('ap', () => {
    it('example', () => {
        const currTime: Maybe<number> = Maybe.of(new Date().getHours());
        const printTime = Maybe.of<(x: number) => string>((x: number) => `it is ${x}o'clock`)
        const printCurrTime = printTime.ap(currTime);

        printCurrTime.value.should.be.equal(`it is ${currTime.value}o'clock`);
    });
    it('example2', () => {
        const add = curry((x: number, y: number) => x + y);
        const plus = Maybe.of(add).ap(Maybe.of(5)).ap(Maybe.of(6));
        plus.should.instanceOf(Maybe);
        plus.value.should.be.equal(11);
    })
})