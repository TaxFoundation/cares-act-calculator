import { statuses } from "./statuses";

const credit: statuses = { individual: 1200, hoh: 1200, joint: 2400 };
const phase_out: statuses = { individual: 75000, hoh: 112500, joint: 150000 };
const child_credit = 500;
const phase_out_rate = 0.05;

const calculate = (
  filingStatus: keyof statuses,
  children: number,
  AGI: number
) => {
  const step1 = Math.max(0, AGI - phase_out[filingStatus]);
  const step2 = step1 * phase_out_rate;
  return Math.max(0, credit[filingStatus] + children * child_credit - step2);
};

export default calculate;
