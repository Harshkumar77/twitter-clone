"use client"

import UserCards from "@/components/UserCards"
import { useEffect, useState } from "react"
import TweetBasic from "./TweetBasic"
import { useQueryState } from 'next-usequerystate'



export default function({ tweets }) {

  const [search, setSearch] = useQueryState('s')
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`/api/search?s=${search}`).then(_ => _.json().then((_) => {
      setSearchResults(_.map(_ => _.item))
      setLoading(false)
    }))

  }, [search])

  return <>
    <input type="search" value={search || ""} onChange={(e) => { setSearch(e.currentTarget.value) }} />
    {
      (search || "") === "" ? <>
        <p>Popular Tweets</p>
        {
          tweets.map(_ =>
            <TweetBasic key={_.id} tweetObj={_} />
          )
        }
      </> : <>
        <p>Results</p>
        {loading ? <p>Loading</p> : searchResults.map(_ => <TweetBasic key={_.id} tweetObj={_} />)}
      </>
    }
  </>
}
