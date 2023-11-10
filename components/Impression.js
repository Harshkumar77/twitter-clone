"use client"
import { impressionFormater } from "@/utils"
import { useEffect, useState } from "react"

export default function Impressions({ tweetObj }) {
  useEffect(() => {
    setLiked(localStorage.getItem(`liked${tweetObj.id}`) ?? false)
    setRetweeted(localStorage.getItem(`rt${tweetObj.id}`) ?? false)
  }, [])

  const [liked, setLiked] = useState(false)
  const [retweeted, setRetweeted] = useState(false)

  return <div className="flex">
    <div className="border-solid border-2 m-1">
      <p>{impressionFormater(tweetObj.likes + (liked ? 1 : 0))}</p>
      <button onClick={() => {
        setLiked((_) => {
          localStorage.setItem(`liked${tweetObj.id}`, !_);
          return !_;
        })
      }}>Like</button>
    </div>
    <div className="border-solid border-2 m-1">
      <p>{impressionFormater(tweetObj.replies)}</p>
      <button>reply</button>
    </div>
    <div className="border-solid border-2 m-1">
      <p>{impressionFormater(tweetObj.retweets + (retweeted ? 1 : 0))}</p>
      <button onClick={() => {
        setRetweeted(_ => {
          localStorage.setItem(`rt${tweetObj.id}`, !_);
          return !_;
        })
      }}>retweet</button>
    </div>
  </div>
}
