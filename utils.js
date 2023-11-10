export function impressionFormater(t) {
  if (t < 1000)
    return String(t)
  if (t < 10_000)
    return String((t / 1000).toFixed(1)) + "k"
  if (t < 1_000_000)
    return String((t / 1000).toFixed(0)) + "k"
  return String((t / 1_000_000).toFixed(1)) + "M"
}


export function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

