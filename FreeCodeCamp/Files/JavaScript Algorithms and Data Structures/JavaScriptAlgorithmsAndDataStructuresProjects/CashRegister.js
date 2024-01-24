function checkCashRegister(price, cash, cid) 
{
  let returnCash = cash - price;
  let closed = 0;
  const currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let std = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  let change = [];
  for (let j = cid.length-1; j >= 0; j--)
    { 
      if (returnCash >= currency[j] && cid[j][1] > 0)
      {
          cid[j][1] -= currency[j];
          std[j][1] += currency[j];
          returnCash -= currency[j];
          console.log("CASH:",returnCash);
          returnCash = correctMath(returnCash);
          console.log("fixCASH:",returnCash,"\n");
          j++;
      }
    }
    if (returnCash !== 0) return {status: "INSUFFICIENT_FUNDS", change: []};
    if (returnCash === 0)
    {
      for (let k = 0; k < std.length; k++)
      {
        if (std[k][1] !== 0) change = [...change, std[k]];
        if (cid[k][1] !== 0) ++closed;
      }
    }
  return closed === 0 ? {status: "CLOSED", change: std} : {status: "OPEN", change: change};  
}

function correctMath(x)
{
  x = String(x);
  if (x[0] === "0") return decimal(x);
  return whole(x);
}
function whole(x)
{
  
  let count = 0, go = 0, start = "", end = "";
  for (let i = 0; i < x.length; i++)
  {
    if (go === 1) ++count;
    if (count === 0) start += x[i];
    if (x[i] === ".") {go = 1; start += x[i+1]}
    if (count === 2) end += x[i]+".";
    if (count > 2) end += x[i];
  }
  if (count === 2) return Number(x);
  end = Number(end); end = Math.round(end); end = String(end);
  let fixed = start + end;
  console.log("start", start);
  console.log("end", end);
  return Number(fixed);
}

function decimal(x)
{
  if (x[3] === undefined) return x = Number(x);
  let count = 0, go = 0, start = x[0]+x[1]+x[2], end = x[3] + ".";
  if (x[2] === "0") return pointOhDec(x);
  for (let i = 0; i < x.length; i++)
  {
    if (go === 1) ++count;
    if (x[i] === ".") go = 1;
    if (count > 1) end += x[i];
  }
  if (count === 2) return Number(x);
  end = Number(end); 
  //console.log("end", end);
  if (end > 3) end = Math.ceil(end);
  if (end < 3) end = Math.floor(end); 
  if (end === 10)
  {
    start = Number(start);
    end = 0.1;
    return start + end;
  }
  end = String(end);
  let fixed = start + end;
  //console.log("start", start);
  //console.log("end", end);
  return Number(fixed);
}

function pointOhDec(x)
{
  if (x[4] === undefined) return x = Number(x);
  let count = 0, go = 0, start = x[0]+x[1]+x[2]+x[3], end = x[4] + ".";
  for (let i = 0; i < x.length; i++)
  {
    if (go === 1) ++count;
    if (x[i] === ".") go = 1;
    if (count > 1) end += x[i];
  }
  if (count === 2) return Number(x);
  end = Number(end); 
  //console.log("end", end);
  if (end > 3) end = Math.ceil(end);
  if (end < 3) end = Math.floor(end); 
  if (end === 10)
  {
    start = Number(start);
    end = 0.1;
    return start + end;
  }
  end = String(end);
  let fixed = start + end;
  console.log("start", start);
  console.log("end", end);
  return Number(fixed);
}
//console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}


///AAAAAAAAAAAAAAAAAAAAAAAAA
function checkCashRegister(price, cash, cid) 
{
  let returnCash = cash - price;
  let closed = 0;
  const currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let std = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  let change = [];
  for (let j = cid.length-1; j >= 0; j--)
    { 
      if (returnCash >= currency[j] && cid[j][1] > 0)
      {
          cid[j][1] -= currency[j];
          cid[j][1] = precise(cid[j][1]);
          cid[j][1] = Number(cid[j][1]);
          std[j][1] += currency[j];
          std[j][1] = precise(std[j][1]);
          std[j][1] = Number(std[j][1]);
          returnCash -= currency[j];
          returnCash = precise(returnCash);
          returnCash = Number(returnCash);
          j++;
      }
    }
    if (returnCash !== 0) return {status: "INSUFFICIENT_FUNDS", change: []};
    if (returnCash === 0)
    {
      for (let k = 0; k < std.length; k++)
      {
        if (std[k][1] !== 0) change = [std[k], ...change];
        if (cid[k][1] !== 0) ++closed;
      }
    }
  return closed === 0 ? {status: "CLOSED", change: std} : {status: "OPEN", change: change};  
}

function precise(x) {
  return x.toPrecision(4);
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}