export function isProductionMode() {
  const nodeEnv = process.env.NODE_ENV

  console.log(`NODE_ENV: ${nodeEnv}`)

  return nodeEnv === 'production'
}