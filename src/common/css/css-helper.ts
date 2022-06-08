const breakpoints = [576, 768, 992, 1200]

export enum bp {
    xs, sm, md, lg
}

const bpValues: number[] = [];

bpValues[bp.xs] = 576;
bpValues[bp.sm] = 768;
bpValues[bp.md] = 992;
bpValues[bp.lg] = 1200;

export const mq = bpValues.map(
  bp => `@media (min-width: ${bp}px)`
)