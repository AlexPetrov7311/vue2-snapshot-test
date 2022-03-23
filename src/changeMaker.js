export default function changeMaker(value) {
  let pennies = value * 100;
  const halfDollars = Math.floor(pennies / 50);
  pennies -= halfDollars * 50;
  const quarters = Math.floor(pennies / 25);
  pennies -= quarters * 25;
  const dimes = Math.floor(pennies / 10);
  pennies -= dimes * 10;
  const nickels = Math.floor(pennies / 5);
  pennies -= nickels * 5;
  return {
    halfDollars,
    quarters,
    dimes,
    nickels,
    pennies,
  };
}