import { SliderContainer } from "@/styles/pages/home";
import Link from "next/link";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { ProductCard } from "@/components/ProductCard";

interface HomeProps {
  products: {
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    priceId: string
  }[]
}

const Home = ({ products }: HomeProps) => {
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
            <ProductCard 
              id={product.id}
              name={product.name}
              price={product.price}
              priceId={product.priceId}
              imageUrl={product.imageUrl}
            />
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
      price: price.unit_amount,
      priceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60
  }
}