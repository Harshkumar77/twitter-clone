import { fuseOptions, getTweets } from '@/utils'
import Fuse from 'fuse.js'
/**
 * @constructor
 * @param {import('next/server').NextRequest} request 
 */
export async function GET(request) {
  const searchQuery = request.nextUrl.searchParams.get("s")
  const tweets = await getTweets()

  const searcher = new Fuse(tweets, {
    ...fuseOptions,
    keys: [
      "body",
    ]
  });

  return new Response(JSON.stringify(
    searcher.search(searchQuery)
  ), { status: 200 })
}
