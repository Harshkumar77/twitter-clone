import YAML from "yaml";

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


let tweets = null
export async function getTweets() {
  if (!tweets) {
    const tweetsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets.yaml`)
    tweets = YAML.parse(await tweetsResponse.text())
  }
  return tweets
}

let users = null
export async function getUsers() {
  if (!users) {
    const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users.yaml`)
    users = YAML.parse(await usersResponse.text())
  }
  return users
}

export const fuseOptions = {
  // isCaseSensitive: false,
  includeScore: true,
  shouldSort: true,
  includeMatches: true,
  // findAllMatches: false,
  minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
}

export function popularTweet(arr) {
  return arr.sort((a, b) => - a.likes + b.likes)
}

export function popularProfile(arr) {
  return arr.sort((a, b) => - a.followers + b.followers)
}
