import "mocha";
import "should";
import { map, compose, IO } from "..";

describe('map', () => {
    it('example', () => {
        const currTime: IO<number> = IO.of(new Date().getHours());
        const printTime = (x: number) => `it is ${x}o'clock`
        const printCurrTime = map<number, IO<number>, string, IO<string>>(printTime)(currTime);

        printCurrTime.unsafePerformIO().should.be.equal(printTime(new Date().getHours()));
    })
})