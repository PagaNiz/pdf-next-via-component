import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    container: {
        background: '#222',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '25px 0'
    },
    text: {
        fontSize: '10px', 
        color: 'white' 
    },
    logo: {
        height: '32px',
        width: '80px'
    }
})