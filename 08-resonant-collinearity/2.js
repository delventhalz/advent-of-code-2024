/**
 * --- Advent of Code 2024 ---
 *
 * Day 8: Resonant Collinearity
 * (Part 2)
 *
 * https://adventofcode.com/2024/day/8#part2
 */

import { uniq } from 'lodash-es';
import { count, eachMatrix, eachOnPath } from '../lib/index.js';

const getAntinodes = (matrix, antennas) => {
  const antinodes = [];

  for (let a = 0; a < antennas.length; a += 1) {
    for (let b = 0; b < antennas.length; b += 1) {
      if (a !== b) {
        const [aX, aY] = antennas[a];
        const [bX, bY] = antennas[b];
        const diffX = aX - bX;
        const diffY = aY - bY;

        eachOnPath(
          matrix,
          [aX, aY],
          (_, coords) => { antinodes.push(coords); },
          (_, [x, y]) => [x + diffX, y + diffY]
        );

        eachOnPath(
          matrix,
          [bX, bY],
          (_, coords) => { antinodes.push(coords); },
          (_, [x, y]) => [x - diffX, y - diffY]
        );
      }
    }
  }

  return antinodes;
}

export default function main({ matrix }) {
  const antennaCoords = {};

  eachMatrix(matrix, (cell, coords) => {
    if (cell !== '.') {
      if (!antennaCoords[cell]) {
        antennaCoords[cell] = [];
      }
      antennaCoords[cell].push(coords);
    }
  });

  const antinodeStrings = Object.values(antennaCoords)
    .flatMap(antennas => getAntinodes(matrix, antennas))
    .map(String);

  return count(uniq(antinodeStrings));
}
