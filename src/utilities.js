export function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`odihnit${ms / 1000}sec`);
    }, ms);
  });
}
