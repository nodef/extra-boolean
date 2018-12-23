function parse(str) {
  var fal = str.search(/(negati|never|refus|wrong|fal|off)|\b(f|n|0)\b/gi)<0? 0:1;
  var not = (str.match(/\b(nay|nah|no|dis|un|in)/gi)||[]).length & 1;
  return !(fal^not);
};
module.exports = parse;
