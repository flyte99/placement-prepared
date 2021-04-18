export default (progress = {}) => {
  let score = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const page in progress) {
    if (progress[page]) {
      score++;
    }
  }

  return score;
};
