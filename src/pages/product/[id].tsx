import Image from "next/image";
import { ProductPageContainer, ProductInformations } from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import { useCartContext } from "@/contexts/cartContext";
import { formatPriceToBrl } from "@/utils/formatPriceToBrl";
import { ParsedUrlQuery } from "querystring";

interface ProductProps {
  product: {
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    priceId: string,
  }
}

interface GetStaticProductParams extends ParsedUrlQuery{
  id: string
}

const Product = ({ product }: ProductProps) => {
  const { addItemToCart } = useCartContext();
  const { isFallback } = useRouter();

  if(isFallback) {
    return <p>Loading ...</p>
  }

  const handleBuyButton = () => {

    const itemToAddToCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      priceId: product.priceId,
      imageUrl: product.imageUrl,
      quantity: 1
    }

    addItemToCart(itemToAddToCart)
  }

  return (
    <ProductPageContainer>
      <div>
        <Image src={product.imageUrl} width={520} height={480} alt=""/>
      </div>
      <ProductInformations>
        <h1>{product.name}</h1>
        <span>{formatPriceToBrl(product.price)}</span>
        <p>{product.description}</p>
        <button onClick={handleBuyButton}>
          Colocar na sacola
        </button>
      </ProductInformations>
    </ProductPageContainer>
  )
}
  
export default Product;

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [
      { params: {id: 'prod_Nv76a1CekwPcUp'} }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<ProductProps, GetStaticProductParams> = async ({ params }) => {
  
  const productId = params?.id

  const response = await stripe.products.retrieve(productId!, {
    expand: ['default_price']
  })

  const price = response.default_price as Stripe.Price

  const product = {
    id: response.id,
    name: response.name,
    description: response.description!,
    imageUrl: response.images[0],
    price: price.unit_amount!,
    priceId: price.id
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 1
  }
}
  