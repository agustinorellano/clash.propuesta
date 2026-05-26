import { gzipSync, gunzipSync } from 'zlib'

/**
 * Codifica el ProposalConfig como gzip+base64url para pasarlo como URL param.
 * Reemplaza el enfoque de tmpdir que no funciona entre invocaciones de Vercel.
 */
export function encodeConfig(config: unknown): string {
  const json = JSON.stringify(config)
  const compressed = gzipSync(Buffer.from(json, 'utf-8'))
  return compressed.toString('base64url')
}

export function decodeConfig(encoded: string): unknown {
  const compressed = Buffer.from(encoded, 'base64url')
  const json = gunzipSync(compressed).toString('utf-8')
  return JSON.parse(json)
}
