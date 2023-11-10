import TweetBasic from '@/components/TweetBasic'
import { impressionFormater } from '@/utils'
import Image from 'next/image'
import YAML from 'yaml'

export default async function Page({ params }) {
  const usersResponse = await fetch(`${process.env.BASE_URL}/users.yaml`)
  const users = YAML.parse(await usersResponse.text())
  const tweetsResponse = await fetch(`${process.env.BASE_URL}/tweets.yaml`)
  const tweets = YAML.parse(await tweetsResponse.text())
  let user = users.filter(_ => _.username == params.slug)[0]
  if (!user)
    return <p>User doesn't extended</p>

  const userTweets = tweets.filter(_ => !_.is_reply && user.username == _.username)
  const userReplies = tweets.filter(_ => _.is_reply && user.username == _.username)
  return (
    <>
      <p>{user.username}</p>
      <p>{user.name}</p>
      <img src={user.pfp} alt="" />
      <p>{user.bio}</p>
      <p>Following : {impressionFormater(user.following)}</p>
      <p>Followers : {impressionFormater(user.followers)}</p>
      {userTweets.map(_ => <TweetBasic tweetObj={_} />)}
      {userReplies.map(_ => <TweetBasic tweetObj={_} />)}
    </>
  )
}
