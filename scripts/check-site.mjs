const target = process.argv[2] ?? 'https://arnav-goel.com/'
const expectedTitle = '<title>Arnav Goel — Product, AI, and Software</title>'

try {
  const response = await fetch(target, {
    redirect: 'follow',
    signal: AbortSignal.timeout(15_000),
  })
  const body = await response.text()
  const healthy = response.status === 200 && body.includes(expectedTitle)

  console.log(
    JSON.stringify({
      target,
      status: response.status,
      expectedTitlePresent: body.includes(expectedTitle),
      healthy,
    }),
  )

  if (!healthy) process.exitCode = 1
} catch (error) {
  console.error(
    JSON.stringify({
      target,
      healthy: false,
      error: error instanceof Error ? error.message : String(error),
    }),
  )
  process.exitCode = 1
}
