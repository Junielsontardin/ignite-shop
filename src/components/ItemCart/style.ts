import { styled } from "@/styles";

export const ItemContainer = styled('div', {
    display: 'flex',
    gap: '1.25rem',
})

export const ImageBackground = styled('div', {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',
    borderRadius: 8,
    maxWidth: '100px',
    maxHeight: '100px',
    width: '100%',
    padding: '0.5rem 0',

    img: {
        width: '100%',
        objectFit: 'cover'
    }
})

export const InformationsItemCart = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    span: {
        fontSize: '$md',
        lineHeight: '160%',

        '&:first-child': {
            color: '$gray300'
        },

        '&:last-child': {
            color: '$gray100',
            fontWeight: 700
        }
    },

    button: {
        background: 'transparent',
        border: 'none',
        color: '$green500',
        fontWeight: 700,
        fontSize: '1rem',
        marginTop: 'auto',
        display: 'flex',
        cursor: 'pointer'
    }
})