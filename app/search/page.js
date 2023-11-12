import SearchPage from "@/components/SearchPage"
import { getTweets, getUsers, popularTweet } from "@/utils"



export default async function() {
  const tweets = await getTweets()
  return <SearchPage tweets={popularTweet(tweets)} />
}
