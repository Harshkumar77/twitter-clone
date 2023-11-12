import TweetBasic from '@/components/TweetBasic'
import { getTweets, shuffle } from '@/utils'
import Image from 'next/image'
import YAML from 'yaml'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const tweets = await getTweets()
  return (
    <>
      {shuffle(tweets).map(
        (_) => <TweetBasic key={_.id} tweetObj={_} />
      )}
    </>
  )
}
