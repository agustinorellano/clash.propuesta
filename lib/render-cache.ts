// In-memory config store for PDF render — short-lived tokens
const cache = new Map<string, { config: any; expiresAt: number }>()

export function storeRenderConfig(token: string, config: any): void {
  cache.set(token, { config, expiresAt: Date.now() + 2 * 60 * 1000 })
}

export function getRenderConfig(token: string): any | null {
  const entry = cache.get(token)
  if (!entry) return null
  if (Date.now() > entry.expiresAt) {
    cache.delete(token)
    return null
  }
  return entry.config
}
