export const metadata = {
  title: 'Balaji SV / Personal Portfolio',
  description: 'Author: Balaji S, Content:BalajiSV, Twitter inspired portfolio design, Portfolio, Twitter design recreation, Twitter design, Software engineer, Front end engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
