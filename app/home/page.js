import TweetBasic from '@/components/TweetBasic'
import { shuffle } from '@/utils'
import Image from 'next/image'
import YAML from 'yaml'

export default async function Home() {
  const tweetsResponse = await fetch(`${process.env.BASE_URL}/tweets.yaml`)
  const tweets = YAML.parse(await tweetsResponse.text()).filter(_ => !_.is_reply)
  return (
    <>
      {shuffle(tweets).map(
        (_) => <TweetBasic tweetObj={_} />
      )}
    </>
  )
}
