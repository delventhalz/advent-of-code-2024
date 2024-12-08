/**
 * --- Advent of Code 2024 ---
 *
 * Day 7: Bridge Repair
 * (Part 1)
 *
 * https://adventofcode.com/2024/day/7
 */

import { sum } from '../lib/index.js';

const isTruable = ([output, inputs]) => {
  const stack = [inputs];

  while (stack.length > 0) {
    const operands = stack.pop();
    const total = operands[0];

    if (operands.length === 1 && total === output) {
      return true;
    }

    if (total <= output) {
      stack.push([total + operands[1], ...operands.slice(2)]);
      stack.push([total * operands[1], ...operands.slice(2)]);
    }
  }

  return false;
}


export default function main({ input }) {
  const equations = input
    .split('\n')
    .map(line => line.split(':'))
    .map(([output, inputs]) => [Number(output), inputs.trim().split(' ').map(Number)]);

  return sum(equations.filter(isTruable).map(([output]) => output));
}
