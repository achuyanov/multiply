module.exports = function multiply(first, second) {
  ret = BigInt(first) * BigInt(second);
  return ret.toString();
}

//'329568934658432659586', '58379426534596'), '19240045408977038918943543720037256');
//let q=BigInt(329568934658432659586*58379426534596);
//console.log(q.toString());