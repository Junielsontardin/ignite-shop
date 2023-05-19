import { styled } from "..";

export const ProductPageContainer = styled('main', {
    maxWidth: '1180px',
    margin: 'auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    marginBottom: '10rem',

    div: {
        background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
        boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',
        borderRadius: 8,
        maxWidth: '576px',
        maxHeight: '656px',
        padding: '5rem 2rem',
        width: '100%',

        img: {
            width: '100%',
            objectFit: 'cover'
        }
    }
})

export const ProductInformations = styled('section', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontWeight: 700,
        fontSize: '$2xl',
        color: '$gray300',
        marginBottom: '1rem',
    },

    span: {
        fontSize: '$2xl',
        color: '$green300',
        marginBottom: '2.5rem',
    },

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '$md',
        fontWeight: 700,
        color: '$white',
        height: '70px',
        borderRadius: 8,
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed'
        },

        '&:not(:disabled):hover': {
            backgroundColor: "$green300"
        }
    }
})