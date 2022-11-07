export const PCG32_INITIALIZER_STATE: u64 = 0x853c49e6748fea9b;
export const PCG32_INITIALIZER_INC: u64 = 0xda3e39cb94b95bdb;
export const PCG_DEFAULT_MULTIPLIER_64: u64 = 6364136223846793005;
export const PCG_DEFAULT_INCREMENT_64: u64 = 1442695040888963407;

export let state: u64 = PCG32_INITIALIZER_STATE;
export let inc: u64 = PCG32_INITIALIZER_INC;

export function pcg32_random(): u32 {
  return pcg_setseq_64_xsh_rr_32_random_r();
}

export function pcg32_boundedrand(bound: u32): u32 {
  const threshold: u32 = -bound % bound;
  while (true) {
    const r: u32 = pcg_setseq_64_xsh_rr_32_random_r();
    if (r >= threshold) return r % bound;
  }
}

export function pcg32_srandom(seed: u64, seq: u64): void {
  state = 0;
  inc = (seq << 1) | 1;
  pcg_setseq_64_step();
  state += seed;
  pcg_setseq_64_step();
}

export function pcg32s_srandom(seed: u64): void {
  state = 0;
  inc = PCG_DEFAULT_INCREMENT_64;
  pcg_setseq_64_step();
  state += seed;
  pcg_setseq_64_step();
}

export function pcg32_advance(delta: u64): void {
  state = pcg_advance_lcg_64(
    state,
    delta,
    PCG_DEFAULT_MULTIPLIER_64,
    inc,
  );
}

function pcg_setseq_64_xsh_rr_32_random_r(): u32 {
  const oldstate: u64 = state;
  pcg_setseq_64_step();
  return pcg_output_xsh_rr_64_32(oldstate);
}

function pcg_setseq_64_step(): void {
  state = state * PCG_DEFAULT_MULTIPLIER_64 + inc;
}

function pcg_output_xsh_rr_64_32(state: u64): u32 {
  return pcg_rotr_32(
    (((state >> 18) ^ state) >> 27) as u32,
    (state >> 59) as u32,
  );
}

function pcg_rotr_32(value: u32, rot: u32): u32 {
  return (value >> rot) | (value << ((-rot) & 31));
}

function pcg_advance_lcg_64(
  state: u64,
  delta: u64,
  cur_mult: u64,
  cur_plus: u64,
): u64 {
  let acc_mult: u64 = 1;
  let acc_plus: u64 = 0;
  while (delta > 0) {
    if (delta & 1) {
      acc_mult *= cur_mult;
      acc_plus = acc_plus * cur_mult + cur_plus;
    }
    cur_plus = (cur_mult + 1) * cur_plus;
    cur_mult *= cur_mult;
    delta /= 2;
  }
  return acc_mult * state + acc_plus;
}
