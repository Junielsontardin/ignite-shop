import { ProductCard, SliderContainer } from "@/styles/pages/home";
import Image from "next/image";
import Link from "next/link";
import Camisa from '../assets/t-shirt2.png'
import { Bag } from '@phosphor-icons/react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    price: number
  }[]
}

const Home = ({ products }: HomeProps) => {
  console.log(products)
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <SliderContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Link key={product.id} href={`/product/${product.id}`} className="keen-slider__slide">
            <ProductCard>
              <Image src={product.imageUrl} width={520} height={480} alt=""/>
              <footer>
                <div>
                  <span>{product.name}</span>
                  <span>R$ {product.price / 100}</span>
                </div>
                <button>
                  <Bag size={24} weight="bold"/>
                </button>
              </footer>
            </ProductCard>
          </Link>
        )
      })}
    </SliderContainer>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: price.unit_amount
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60
  }
}