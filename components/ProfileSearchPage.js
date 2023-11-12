"use client"

import UserCards from "@/components/UserCards"
import { useEffect, useState } from "react"
import TweetBasic from "./TweetBasic"
import { useQueryState } from 'next-usequerystate'



export default function({ users }) {

  const [search, setSearch] = useQueryState('s')
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`/api/profile?s=${search}`).then(_ => _.json().then((_) => {
      setSearchResults(_.map(_ => _.item))
      setLoading(false)
    }))
  }, [search])

  return <>
    <input type="search" value={search || ""} onChange={(e) => { setSearch(e.currentTarget.value) }} />
    {
      (search || "") === "" ? <>
        <p>Popular Profiles</p>
        {
          users.map(_ =>
            <UserCards key={_.username} userObj={_} />
          )
        }
      </> : <>
        <p>Results</p>
        {loading ? <p>Loading</p> : searchResults.map(_ => <UserCards key={_.username} userObj={_} />)}
      </>
    }
  </>
}

