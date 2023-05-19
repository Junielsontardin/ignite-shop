import { styled } from "@/styles";

export const FooterInformationsCart = styled('footer', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: 'auto',
    paddingTop: '2rem',

    button: {
        width: '100%',
        height: '69px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$green500',
        color: '$white',
        fontSize: '$md',
        fontWeight: 700,
        lineHeight: '160%',
        marginTop: '3.5rem',
        border: 'none',
        borderRadius: 8,
        cursor: 'pointer'
    }
})

export const LabelSummaryCart = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    
    span: {
        fontSize: '1rem',
        lineHeight: '160%',
        color: '$gray100',
    }
})