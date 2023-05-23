import { styled } from "@/styles";

export const ProductCardContainer = styled('div', {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',
    borderRadius: 8,
    padding: '4.5rem 4rem',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '648px',

    img: {
        width: '100%',
        objectFit: 'cover'
    },
    
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem',
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        opacity: 0,
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        transition: 'all 0.2s ease-in-out',
        transform: 'translateY(110%)',

        div: {
            display: 'flex',
            flexDirection: 'column',
            gap: 4,

            span: {
                '&:first-child': {
                    fontWeight: 700,
                    fontSize: '$lg',
                    color: '$gray100',
                },

                '&:last-child': {
                    fontWeight: 700,
                    fontSize: '$xl',
                    color: '$green500',
                }
            }
        },

        button: {
            backgroundColor: '$green500',
            border: 'none',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 48,
            width: 48,
            cursor: 'pointer',
            color: '$white'
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0)',
            opacity: 1,
        }
    },
})