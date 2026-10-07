// Restore scroll after the incoming page exists, rather than during its fade.
const pending = new Set<() => void>()
export function waitForPageTransition(): Promise<void> {
  return new Promise(resolve => pending.add(resolve))
}
export function finishPageTransition(): void {
  for (const resolve of pending) resolve()
  pending.clear()
}
