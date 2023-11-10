import Impressions from "./Impression"

export default async function TweetBasic({ tweetObj }) {
  return (
    <div className="p-4 my-1 block border-2 border-solid border-black text-start">
      <p>{new Date(tweetObj.posted_at).toDateString()}</p>
      <object>
        <a href={`/user/${tweetObj.username}`}>
          {tweetObj.name}{" "}
          @{tweetObj.username}
        </a>
      </object>
      <a href={`/tweet/${tweetObj.id}`} className='whitespace-pre-wrap'>{tweetObj.body}</a>
      {
        tweetObj.attachment &&
        <a href={`/tweet/${tweetObj.id}`}>
          <img src={tweetObj.attachment}></img>
        </a>
      }
      <Impressions tweetObj={tweetObj}/>
    </div>
  )
}

