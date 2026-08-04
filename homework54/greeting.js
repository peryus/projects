export function getUserGreeting() {
  const name = process.argv[2]

  return name ? `Hello, ${name}` : 'Hello, Guest'
}