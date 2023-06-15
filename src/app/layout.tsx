import { Roboto } from 'next/font/google'
import './globals.css'

const bebasNeue = Roboto({
  weight: ['100', '300', '400'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Movie Hub',
  description: 'The best movie app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${bebasNeue.className} bg-red-400`}>{children}</body>
    </html>
  )
}
