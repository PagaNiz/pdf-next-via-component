import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create ({
    container: {
        padding: '0 25px',
        fontSize: '10px',
    },
    LogoContainer: {
        display: '-webkit-flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: '60px',
        width: '160px'
    }
})

export const fontFamily = StyleSheet.create({
    fontFamilyBold: {
        fontFamily: 'Helvetica-Bold'
    },
    fontFamily: {
        fontFamily: 'Helvetica !important'
    }
})