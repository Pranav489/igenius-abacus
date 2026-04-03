// app/fonts.js
import { Inter, Plus_Jakarta_Sans, Space_Grotesk, Host_Grotesk } from 'next/font/google'

// Primary body font - highly readable
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Secondary body font & headings
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

// Numbers and stats
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

// Primary heading font - Modern grotesque alternative
export const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  variable: '--font-host-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const fonts = {
  inter,
  plusJakarta,
  spaceGrotesk,
  hostGrotesk,  // Replaces cabinetGrotesk
}

export default fonts