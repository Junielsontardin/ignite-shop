import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    
    header: {
        maxWidth: 1180,
        padding: '2.5rem 0 2rem',
        width: '100%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',

        button: {
            backgroundColor: '$gray800',
            color: '$gray300',
            border: 'none',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 48,
            width: 48,
            cursor: 'pointer',
        }
    }
})