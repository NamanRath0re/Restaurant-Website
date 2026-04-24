import './globals.css'

export const metadata = {
  title: 'Foodi - Delicious Food Delivered',
  description: 'Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;800&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
