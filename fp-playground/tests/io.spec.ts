import "mocha";
import "should";
import { map, IO, compose, chain } from "..";

describe('IO', () => {
    it('unsafePerformIO', () => {
        const currTime: IO<number> = IO.of(new Date().getHours());
        const printTime = (x: number) => `it is ${x}o'clock`
        const printCurrTime = map<number, string>(printTime)(currTime) as IO<string>;

        printCurrTime.unsafePerformIO().should.be.equal(printTime(new Date().getHours()));
    })
})

describe('MonadIO', () => {
    it('chain', () => {
        const getFile = IO.of<string>('/home/mostly-adequate/ch09.md');
        const pureLog = (str: string) => new IO<void>(() => console.log(str));
        const last = (strs: string[]) => strs[strs.length - 1];
        const split = (seperator: string) => (str: string) => str.split(seperator);
        const basename = map<string, string>(compose<string, string>(last, split('/')));
        const logFileName = compose<IO<IO<void>>, IO<string>>(chain<string, IO<void>>(pureLog), basename)(getFile);

        logFileName.should.be.instanceOf(IO);
    });
    it('join', () => {
        const monad = IO.of<IO<string>>(IO.of<string>('hi'));
        const io: IO<string> = monad.join();

        monad.should.be.instanceOf(IO);
        monad.unsafePerformIO().should.be.instanceOf(IO);
        io.should.be.instanceOf(IO);
        io.unsafePerformIO().should.be.equal('hi');
    })
})