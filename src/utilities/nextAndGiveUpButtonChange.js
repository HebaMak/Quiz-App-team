export const changeNextButtonToGiveUp = (next, giveup) => {
  const test = setTimeout(() => {
    next.style.display = 'none';
    giveup.style.display = 'block';
  }, 3000);
  return test;
};

export const changeGiveUPButtonToNext = (next, giveup) => {
  next.style.display = 'block';
  giveup.style.display = 'none';
};
