import Link from "next/link"
import Impressions from "./Impression"

export default function TweetBasic({ tweetObj }) {
  return (
    <div className="  p-4 my-1 block border-2 border-solid border-black text-start">
      <p>{new Date(tweetObj.posted_at).toDateString()}</p>
      <Link href={`/profile/${tweetObj.username}`}>
        {tweetObj.name}{" "}
        @{tweetObj.username}
      </Link>
      <br/>
      <a href={`/tweet/${tweetObj.id}`} className='whitespace-pre-wrap'>{tweetObj.body}</a>
      {
        tweetObj.attachment &&
        <a href={`/tweet/${tweetObj.id}`} className="">
          <img src={tweetObj.attachment} className="md:w-[32rem] lg:w-[30vw]"></img>
        </a>
      }
      <Impressions tweetObj={tweetObj} />
    </div>
  )
}

