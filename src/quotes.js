export default async function () {
  const response = await fetch('https://api.kanye.rest')
  const data = await response.json()
  return data
}