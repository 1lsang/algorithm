"use strict"

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const names = input.slice(1, n+1);
const schedules = input.slice(n+1).map(str => str.split(' '));

function solution(n, m, names, schedules) {
  const reservations = Array.from({ length : n }, () => Array(9).fill(0));
  const roomNames = names.sort();
  
  for (let schedule of schedules) {
    const room = schedule[0];
    const start = Number(schedule[1])-9;
    const end = Number(schedule[2])-9;
    for (let i = start; i < end; i++) {
      reservations[roomNames.indexOf(room)][i] = 1;
    }
  }
  
  return reservations.map((reservation, i) => {
    const times = [];
    let t = 0;
    for (let j = 0; j < 9; j++) {
      if (reservation[j] === 0) t += 1;
      else {
        if (t !== 0) times.push(`${String(j+9-t).padStart(2, '0')}-${j+9}`);
        t = 0;
      }
      if (j===8 && t !== 0) times.push(`${String(18-t).padStart(2, '0')}-${18}`);
    }
    return [`Room ${roomNames[i]}:`, times.length === 0 ? 'Not available' : `${times.length} available:`, ...times].join('\n');
  }).join('\n-----\n');
}

console.log(solution(n, m, names, schedules))