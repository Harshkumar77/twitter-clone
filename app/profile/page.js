import ProfileSearchPage from '@/components/ProfileSearchPage'
import TweetBasic from '@/components/TweetBasic'
import { getUsers, impressionFormater, popularProfile } from '@/utils'
import Image from 'next/image'
import YAML from 'yaml'

export default async function Page() {
  const users = await getUsers()
  return <ProfileSearchPage users={popularProfile(users)} />
}

