import "mocha";
import "should";
import { map, Functor, PointedFunctor, compose } from "..";

describe('map', () => {
    it('example', () => {
        const currTime: () => PointedFunctor<number> = () => PointedFunctor.of(new Date().getHours());
        const hrs: PointedFunctor<number> = PointedFunctor.of<number>(3);
        const printTime = (x: number) => `it is ${x}o'clock`
        const printCurrTime = compose(map<number, PointedFunctor<number>, string, PointedFunctor<string>>(printTime), currTime);

        printCurrTime().value.should.be.equal(printTime(new Date().getHours()));
    })
})