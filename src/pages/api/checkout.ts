import { stripe } from '@/lib/stripe'
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const checkout = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const items: Stripe.Checkout.SessionCreateParams.LineItem[] = req.body

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!items.length) {
    return res.status(400).json({ error: 'Items not found.' });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}/`,
    mode: 'payment',
    line_items: items
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}

export default checkout;