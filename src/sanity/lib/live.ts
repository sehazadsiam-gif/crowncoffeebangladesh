// next-sanity/live is not available in this version of next-sanity.
// Using standard client-based fetching instead.
import { client } from './client'

export const sanityFetch = async ({ query, params = {} }: { query: string; params?: any }) => {
  return client.fetch(query, params)
}

export const SanityLive = () => null
