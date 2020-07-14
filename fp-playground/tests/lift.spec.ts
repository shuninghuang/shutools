// import "mocha";
// import "should";
// import {lift, curry, Maybe} from "..";

// describe('lift', () => {
//     it('example', () => {
//         const add = curry<number, number, number>(( x: number, y: number )=> x + y);
//         const safeAdd = lift(add) as unknown as (x: Maybe<number>) => (y: Maybe<number>) => Maybe<number>;
//         safeAdd(Maybe.of(3))(Maybe.of(4)).value.should.be.equal(7);
//     })
// })