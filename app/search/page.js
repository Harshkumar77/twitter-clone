import SearchPage from "@/components/SearchPage"
import { getTweets, getUsers, popularTweet } from "@/utils"

export const dynamic = 'force-dynamic'

export default async function() {
  const tweets = await getTweets()
  return <SearchPage tweets={popularTweet(tweets)} />
}
