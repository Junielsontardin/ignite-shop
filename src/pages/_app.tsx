import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import LogoIgniteShop from '../assets/logo.svg'
import { Container } from '@/styles/pages/app'
import Link from 'next/link'
import { Cart } from '@/components/Cart'
import CartContextProvider from '@/contexts/cartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <header>
          <Link href='/'>
            <Image src={LogoIgniteShop} width={130} height={52} alt=""/>
          </Link>
          <Cart />
        </header>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
