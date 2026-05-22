import { writeFileSync, readFileSync, unlinkSync, existsSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'

function filePath(token: string) {
  return join(tmpdir(), `clash-render-${token}.json`)
}

export function storeRenderConfig(token: string, config: any): void {
  writeFileSync(filePath(token), JSON.stringify(config), 'utf-8')
  // Auto-cleanup after 3 minutes
  setTimeout(() => {
    try { unlinkSync(filePath(token)) } catch {}
  }, 3 * 60 * 1000)
}

export function getRenderConfig(token: string): any | null {
  const path = filePath(token)
  if (!existsSync(path)) return null
  try {
    return JSON.parse(readFileSync(path, 'utf-8'))
  } catch {
    return null
  }
}
