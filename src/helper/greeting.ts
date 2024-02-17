export const displayGreeting = () => {
  const myDate = new Date();
  const hrs = myDate.getHours();
  let greet;

  if (hrs < 12) greet = "صبح بخیر";
  else if (hrs >= 12 && hrs <= 17) greet = "ظهر بخیر";
  else if (hrs >= 17 && hrs <= 24) greet = "عصر بخیر";
  return greet;
};
