async function instantiate(module, imports = {}) {
  const { exports } = await WebAssembly.instantiate(module, imports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    PCG32_INITIALIZER_STATE: {
      // assembly/index/PCG32_INITIALIZER_STATE: u64
      valueOf() { return this.value; },
      get value() {
        return BigInt.asUintN(64, exports.PCG32_INITIALIZER_STATE.value);
      }
    },
    PCG32_INITIALIZER_INC: {
      // assembly/index/PCG32_INITIALIZER_INC: u64
      valueOf() { return this.value; },
      get value() {
        return BigInt.asUintN(64, exports.PCG32_INITIALIZER_INC.value);
      }
    },
    PCG_DEFAULT_MULTIPLIER_64: {
      // assembly/index/PCG_DEFAULT_MULTIPLIER_64: u64
      valueOf() { return this.value; },
      get value() {
        return BigInt.asUintN(64, exports.PCG_DEFAULT_MULTIPLIER_64.value);
      }
    },
    PCG_DEFAULT_INCREMENT_64: {
      // assembly/index/PCG_DEFAULT_INCREMENT_64: u64
      valueOf() { return this.value; },
      get value() {
        return BigInt.asUintN(64, exports.PCG_DEFAULT_INCREMENT_64.value);
      }
    },
    state: {
      // assembly/index/state: u64
      valueOf() { return this.value; },
      get value() {
        return BigInt.asUintN(64, exports.state.value);
      },
      set value(value) {
        exports.state.value = value || 0n;
      }
    },
    inc: {
      // assembly/index/inc: u64
      valueOf() { return this.value; },
      get value() {
        return BigInt.asUintN(64, exports.inc.value);
      },
      set value(value) {
        exports.inc.value = value || 0n;
      }
    },
    pcg32_random() {
      // assembly/index/pcg32_random() => u32
      return exports.pcg32_random() >>> 0;
    },
    pcg32_boundedrand(bound) {
      // assembly/index/pcg32_boundedrand(u32) => u32
      return exports.pcg32_boundedrand(bound) >>> 0;
    },
    pcg32_srandom(seed, seq) {
      // assembly/index/pcg32_srandom(u64, u64) => void
      seed = seed || 0n;
      seq = seq || 0n;
      exports.pcg32_srandom(seed, seq);
    },
    pcg32s_srandom(seed) {
      // assembly/index/pcg32s_srandom(u64) => void
      seed = seed || 0n;
      exports.pcg32s_srandom(seed);
    },
    pcg32_advance(delta) {
      // assembly/index/pcg32_advance(u64) => void
      delta = delta || 0n;
      exports.pcg32_advance(delta);
    },
  }, exports);
  return adaptedExports;
}
export const {
  memory,
  PCG32_INITIALIZER_STATE,
  PCG32_INITIALIZER_INC,
  PCG_DEFAULT_MULTIPLIER_64,
  PCG_DEFAULT_INCREMENT_64,
  state,
  inc,
  pcg32_random,
  pcg32_boundedrand,
  pcg32_srandom,
  pcg32s_srandom,
  pcg32_advance
} = await instantiate(new WebAssembly.Module(new Uint8Array([
  0,97,115,109,1,0,0,0,1,22,5,96,1,126,0,96,0,1,127,96,1,127,1,127,96,2,126,126,0,96,0,0,3,7,6,1,2,3,0,0,4,5,3,1,0,0,6,65,6,126,0,66,155,213,191,164,231,188,146,158,133,127,11,126,0,66,219,183,229,165,185,185,142,159,90,11,126,0,66,173,254,213,228,212,133,253,168,216,0,11,126,0,66,207,130,158,187,239,239,222,130,20,11,126,1,66,0,11,126,1,66,0,11,7,213,1,12,23,80,67,71,51,50,95,73,78,73,84,73,65,76,73,90,69,82,95,83,84,65,84,69,3,0,21,80,67,71,51,50,95,73,78,73,84,73,65,76,73,90,69,82,95,73,78,67,3,1,25,80,67,71,95,68,69,70,65,85,76,84,95,77,85,76,84,73,80,76,73,69,82,95,54,52,3,2,24,80,67,71,95,68,69,70,65,85,76,84,95,73,78,67,82,69,77,69,78,84,95,54,52,3,3,5,115,116,97,116,101,3,4,3,105,110,99,3,5,12,112,99,103,51,50,95,114,97,110,100,111,109,0,0,17,112,99,103,51,50,95,98,111,117,110,100,101,100,114,97,110,100,0,1,13,112,99,103,51,50,95,115,114,97,110,100,111,109,0,2,14,112,99,103,51,50,115,95,115,114,97,110,100,111,109,0,3,13,112,99,103,51,50,95,97,100,118,97,110,99,101,0,4,6,109,101,109,111,114,121,2,0,8,1,5,10,143,3,6,59,2,1,126,2,127,35,5,35,4,34,0,66,173,254,213,228,212,133,253,168,216,0,126,124,36,4,32,0,66,18,136,32,0,133,66,27,136,167,34,1,65,0,32,0,66,59,136,167,34,2,107,116,32,1,32,2,118,114,11,84,2,1,126,3,127,65,0,32,0,107,32,0,112,33,2,3,127,35,5,35,4,34,1,66,173,254,213,228,212,133,253,168,216,0,126,124,36,4,32,2,32,1,66,18,136,32,1,133,66,27,136,167,34,3,65,0,32,1,66,59,136,167,34,4,107,116,32,3,32,4,118,114,34,3,75,13,0,32,3,32,0,112,11,11,48,0,66,0,36,4,32,1,66,1,134,66,1,132,36,5,35,5,34,1,36,4,35,4,32,0,124,36,4,32,1,35,4,66,173,254,213,228,212,133,253,168,216,0,126,124,36,4,11,72,0,66,0,36,4,66,207,130,158,187,239,239,222,130,20,36,5,66,207,130,158,187,239,239,222,130,20,36,4,32,0,66,207,130,158,187,239,239,222,130,20,124,36,4,35,4,66,173,254,213,228,212,133,253,168,216,0,126,66,207,130,158,187,239,239,222,130,20,124,36,4,11,102,1,5,126,35,4,33,5,66,173,254,213,228,212,133,253,168,216,0,33,2,35,5,33,3,66,1,33,1,3,64,32,0,66,0,82,4,64,32,0,66,1,131,167,4,64,32,2,32,4,126,32,3,124,33,4,32,1,32,2,126,33,1,11,32,2,66,1,124,32,3,126,33,3,32,2,32,2,126,33,2,32,0,66,1,136,33,0,12,1,11,11,32,1,32,5,126,32,4,124,36,4,11,27,0,66,155,213,191,164,231,188,146,158,133,127,36,4,66,219,183,229,165,185,185,142,159,90,36,5,11,0,23,16,115,111,117,114,99,101,77,97,112,112,105,110,103,85,82,76,5,102,97,108,115,101
])));
