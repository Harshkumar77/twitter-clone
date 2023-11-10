import FirstModal from '@/components/FirstModal'
import TweetBasic from '@/components/TweetBasic'
import { shuffle } from '@/utils'
import Image from 'next/image'
import YAML from 'yaml'
export const dynamic = 'force-dynamic'

export default async function Home() {
  return <FirstModal />
}
