import { fuseOptions, getUsers } from '@/utils'
import Fuse from 'fuse.js'
/**
 * @constructor
 * @param {import('next/server').NextRequest} request 
 */
export async function GET(request) {
  const searchQuery = request.nextUrl.searchParams.get("s")
  const profiles = await getUsers()

  const searcher = new Fuse(profiles, {
    ...fuseOptions,
    keys: [
      "username",
      "name"
    ]
  });

  return new Response(JSON.stringify(
    searcher.search(searchQuery)
  ), { status: 200 })
}
