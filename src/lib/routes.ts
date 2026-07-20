export function normalizePath(pathname: string) {
  return pathname === '/' ? pathname : pathname.replace(/\/+$/, '') || '/'
}
