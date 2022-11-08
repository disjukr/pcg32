# pcg32

[AssemblyScript][AssemblyScript] port of pcg 32 variants from [pcg-c][pcg-c].

What is pcg?: https://www.pcg-random.org/

[AssemblyScript]: https://www.assemblyscript.org/
[pcg-c]: https://github.com/imneme/pcg-c

# How to use

https://www.pcg-random.org/using-pcg-c.html#basic-high-level-api

```sh
npm install @disjukr/pcg32
```

```js
import {
  pcg32_advance,
  pcg32_boundedrand,
  PCG32_INITIALIZER_STATE,
  pcg32_random,
  pcg32_srandom,
  pcg32s_srandom,
  state,
} from "@disjukr/pcg32";
// import * as pcg32_for_deno from "https://deno.land/x/pcg32/mod.ts";

// get random 32 bit unsigned integer
pcg32_random(); // 355248013
pcg32_random(); // 41705475
pcg32_random(); // 3406281715
pcg32_random(); // 4186697710

// get bounded range integer (0 ~ 99)
pcg32_boundedrand(100); // 79
pcg32_boundedrand(100); // 48
pcg32_boundedrand(100); // 21
pcg32_boundedrand(100); // 30

// reset rng state
state.value = PCG32_INITIALIZER_STATE.value;
pcg32_random(); // 355248013
pcg32_random(); // 41705475
pcg32_random(); // 3406281715
pcg32_random(); // 4186697710

// jump ahead
state.value = PCG32_INITIALIZER_STATE.value;
pcg32_advance(2n); // skip 355248013, 41705475
pcg32_random(); // 3406281715
pcg32_random(); // 4186697710
pcg32_advance(-3n); // 3 steps rewind
pcg32_random(); // 41705475
pcg32_random(); // 3406281715
pcg32_random(); // 4186697710

// initialize with seed
pcg32s_srandom(0n);
pcg32_random(); // 3894649422
pcg32_random(); // 2055130073
pcg32_random(); // 2315086854
pcg32_random(); // 2925816488

// initialize with seed and sequence
pcg32_srandom(0n, 0n);
pcg32_random(); // 3837872008
pcg32_random(); // 932996374
pcg32_random(); // 1548399547
pcg32_random(); // 1612522464
```
