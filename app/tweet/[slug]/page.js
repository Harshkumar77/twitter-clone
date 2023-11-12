import TweetBasic from '@/components/TweetBasic'
import { getTweets } from '@/utils'
import Image from 'next/image'
import YAML from 'yaml'

export default async function Page({ params }) {
  const tweets = await getTweets()
  let mainTweet = tweets.filter(_ => _.id == params.slug)[0]
  if (!mainTweet)
    return <p>Tweet doesn't extended</p>

  const replies = tweets.filter(_ => _.is_reply && mainTweet.id == _.reply_of)
  return (

    <main className="">
      <TweetBasic tweetObj={mainTweet} />
      <p>
        replies
      </p>
      {
        replies.map((_) =>
          <TweetBasic tweetObj={_} />
        )
      }
    </main>
  )
}
