import { IO } from './IO';
import { curry } from './curry';

export const chain = <FI, FO>(f: (x: FI) => FO) => (m: IO<FI>) => m.map(f);