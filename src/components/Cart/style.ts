
import { styled } from "@/styles";
import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content, {
    background: '$gray800',
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
    padding: '4.5rem 3rem 3rem 3rem',
    maxWidth: '30rem',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
})

export const ButtonCloseCart = styled(Dialog.Close, {
    position: 'absolute',
    right: 24,
    top: 24,
    color: '#8D8D99',
    cursor: 'pointer',
    lineHeight: 0,
    backgroundColor: 'transparent',
    border: 'none'
})

export const TitleCart = styled(Dialog.Title, {
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    lineHeight: '160%',

})

export const ListItems = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '2rem'
})