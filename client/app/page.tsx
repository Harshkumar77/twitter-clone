import Link from 'next/link'
import { z } from 'zod'

async function validateToken(token: string): Promise<Boolean> {
  return true
}

async function feed(accessToken: string = '') {
  const response = await fetch(`${process.env.GO_SERVICE}/api/feed`, {
    next: { revalidate: 1800 },
  })
  const responseJson = await response.json()
  return z
    .object({
      tweets: z
        .object({ body: z.string(), username: z.string(), tweetId: z.number() })
        .array()
        .nonempty(),
    })
    .parse(responseJson).tweets
}

export default async function Home() {
  const tweets = await feed()
  console.log(tweets)

  return (
    <div className="flex flex-col">
      {tweets.map(({ tweetId, body, username }) => (
        <Link
          className="bg-sky-50 my-2 outline outline-red-900 p-2"
          key={tweetId}
          href={`/tweet/${tweetId}`}
        >
          <Link href={`/user/${username}`}>@{username}</Link>
          <p>{body}</p>
        </Link>
      ))}
    </div>
  )
}
