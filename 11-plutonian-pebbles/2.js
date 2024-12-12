/**
 * --- Advent of Code 2024 ---
 *
 * Day 11: Plutonian Pebbles
 * (Part 2)
 *
 * https://adventofcode.com/2024/day/11#part2
 */

import fs from 'fs';
import { uniq } from 'lodash-es';
import { sum } from '../lib/index.js';


const JSON_PATH = './11-plutonian-pebbles/stone-growth.json';

const changeStone = (stone) => {
  if (stone === 0) {
    return [1];
  }

  const digits = String(stone);
  const length = digits.length;

  if (length % 2 === 0) {
    return [
      Number(digits.slice(0, length / 2)),
      Number(digits.slice(length / 2)),
    ];
  }

  return [stone * 2024];
};

const blink = (stone, times) => {
  let stones = [stone]

  for (let i = 1; i < times; i += 1) {
    stones = stones.flatMap(changeStone);
  }

  return stones;
};

const addStoneToMap = (map, stone, limit) => {
  let stones = [stone]
  map[stone] = [1];

  for (let i = 1; i <= limit; i += 1) {
    stones = stones.flatMap(changeStone);
    map[stone][i] = stones.length;
  }
};

const buildMap = (growthMap, stones, limit) => {
  const nextStones = uniq(stones).filter(stn => !growthMap[stn]);

  while (nextStones.length > 0) {
    const stone = nextStones.pop();
    console.log(stone, '-- out of --', nextStones.length);

    addStoneToMap(growthMap, stone, limit);
    fs.writeFileSync(JSON_PATH, JSON.stringify(growthMap));
  }
};


export default async function main({ parsed }) {
  const growthMap = JSON.parse(fs.readFileSync(JSON_PATH));

  const halfwayStones = parsed.flatMap(stn => blink(stn, 40));
  buildMap(growthMap, halfwayStones, 36);

  return sum(halfwayStones.map(stn => growthMap[stn][36]));
}
