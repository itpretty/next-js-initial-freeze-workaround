import Link from 'next/link'

export default function About() {
  return (
    <div>
      Welcome to the About page. Go to the{' '}
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      page.
    </div>
  )
}
