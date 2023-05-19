import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import LogoIgniteShop from '../assets/logo.svg'
import { Bag } from '@phosphor-icons/react'
import { Container } from '@/styles/pages/app'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <header>
        <Link href='/'>
          <Image src={LogoIgniteShop} width={130} height={52} alt=""/>
        </Link>
        <button>
          <Bag size={24} weight="bold" />
        </button>
      </header>
      <Component {...pageProps} />
    </Container>
  )
}
