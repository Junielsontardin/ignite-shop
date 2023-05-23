import Image from "next/image";
import Link from "next/link";
import { ImageContainer, ListImages, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface SuccessProps {
  costumerName: string;
  products?: Stripe.LineItem[]
}

const Success = ({ costumerName, products }: SuccessProps) => {

  const totalItems = products?.reduce((total, product) => {
    return total += product.quantity as number
  }, 0)

  return (
    <>
      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ListImages>
          {products?.map(product => {
              const productStripe = product.price?.product as Stripe.Product;

              return (
                <ImageContainer key={product.id}>
                  <Image src={productStripe.images[0]} width={120} height={110} alt="" />
                </ImageContainer>
              )
            }
          )}
        </ListImages>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de <strong>{totalItems}</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export default Success;

export const getServerSideProps: GetServerSideProps<SuccessProps> = async ({ query }) => {

    if(!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product']
    });

    const costumerName = session?.customer_details?.name;
    const products = session?.line_items?.data;

    return {
        props: {
            costumerName: costumerName!,
            products
        }
    }
}