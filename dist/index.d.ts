/** Exported memory */
export declare const memory: WebAssembly.Memory;
/** assembly/index/PCG32_INITIALIZER_STATE */
export declare const PCG32_INITIALIZER_STATE: {
  /** @type `u64` */
  get value(): bigint
};
/** assembly/index/PCG32_INITIALIZER_INC */
export declare const PCG32_INITIALIZER_INC: {
  /** @type `u64` */
  get value(): bigint
};
/** assembly/index/PCG_DEFAULT_MULTIPLIER_64 */
export declare const PCG_DEFAULT_MULTIPLIER_64: {
  /** @type `u64` */
  get value(): bigint
};
/** assembly/index/PCG_DEFAULT_INCREMENT_64 */
export declare const PCG_DEFAULT_INCREMENT_64: {
  /** @type `u64` */
  get value(): bigint
};
/** assembly/index/state */
export declare const state: {
  /** @type `u64` */
  get value(): bigint;
  set value(value: bigint);
};
/** assembly/index/inc */
export declare const inc: {
  /** @type `u64` */
  get value(): bigint;
  set value(value: bigint);
};
/**
 * assembly/index/pcg32_random
 * @returns `u32`
 */
export declare function pcg32_random(): number;
/**
 * assembly/index/pcg32_boundedrand
 * @param bound `u32`
 * @returns `u32`
 */
export declare function pcg32_boundedrand(bound: number): number;
/**
 * assembly/index/pcg32_srandom
 * @param seed `u64`
 * @param seq `u64`
 */
export declare function pcg32_srandom(seed: bigint, seq: bigint): void;
/**
 * assembly/index/pcg32s_srandom
 * @param seed `u64`
 */
export declare function pcg32s_srandom(seed: bigint): void;
/**
 * assembly/index/pcg32_advance
 * @param delta `u64`
 */
export declare function pcg32_advance(delta: bigint): void;
