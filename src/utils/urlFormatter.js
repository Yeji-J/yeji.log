export default function urlFormatter(...args) {
  const url = args
    .map((value) =>
      value.replaceAll('-', '').replace(/\s+/g, '')?.toLowerCase()
    )
    .join('/')

  return url
}
