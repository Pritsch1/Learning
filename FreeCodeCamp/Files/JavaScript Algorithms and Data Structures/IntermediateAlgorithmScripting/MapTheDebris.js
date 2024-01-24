// math = 2 * pi * sqrt(a³/μ)//a = orbit, μ = GM.
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = [];
  for (let i = 0; i < arr.length; i++)
  {
    const a = earthRadius + arr[i]["avgAlt"];
    let math = (2 * Math.PI) * Math.sqrt((a*a*a)/GM);
    math = Math.round(math);
    newArr = [...newArr, {name: arr[i]["name"], orbitalPeriod: math}]
  }
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);//86400
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])//5734, 2377399