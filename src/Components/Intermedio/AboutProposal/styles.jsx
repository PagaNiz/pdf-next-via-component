const { StyleSheet } = require("@react-pdf/renderer");

export const styles = StyleSheet.create({
    container: {
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'space-between'
    },
    columnHeader: {
        fontSize: '10px',
        maxWidth: '100px'
    },
    columnData: {
        fontSize: '10px',
    },
    row: {
        padding: "2px",
        alignItems: "center"
    }
});