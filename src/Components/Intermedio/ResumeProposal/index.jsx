import { styles } from "./styles"
import { fontFamily } from "../indexStyles"

const ResumeProposal = () => {
    return (
        <div>
            <table>
                <tbody>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}> <span style={fontFamily.fontFamilyBold}>Nome:</span> CARLOS LACERDA</td>
                    </tr>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}><span style={fontFamily.fontFamilyBold}>Segmento:</span> Agronegócio - Agronegócio</td>
                        <td style={styles.columnData}><span style={fontFamily.fontFamilyBold}>Período:</span> 4 meses</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}><span style={fontFamily.fontFamilyBold}>Webpage (+):</span></td>
                        <td style={styles.columnData}>R$ 10.000,00</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}><span style={fontFamily.fontFamilyBold}>Subtotal:</span></td>
                        <td style={styles.columnData}>R$ 10.000,00</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}><span style={fontFamily.fontFamilyBold}>Condição comercial (-):</span></td>
                        <td style={{...styles.columnData, ...styles.colorRed}}>R$ 1.900,00</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr style={{ ...styles.row, ...styles.totalContainer, ...fontFamily.fontFamilyBold }}>
                        <td style={styles.columnHeader}>Total:</td>
                        <td style={styles.columnData}>R$ 8.100,00</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr style={{ ...styles.row, ...styles.totalContainer, ...fontFamily.fontFamilyBold }}>
                        <td style={styles.columnHeader}>Método de pagamento</td>
                        <td style={styles.columnData}>Parcelas</td>
                        <td style={styles.columnData}>Valor</td>
                    </tr>
                    <tr style={{ ...styles.row, ...styles.totalContainer, ...fontFamily.fontFamilyBold }}>
                        <td style={styles.columnHeader}>Pix</td>
                        <td style={styles.columnData}>&nbsp;</td>
                        <td style={styles.columnData}>R$ 8.100,00</td>
                    </tr>
                    <tr style={{ ...styles.row, ...styles.totalContainer, ...fontFamily.fontFamilyBold }}>
                        <td style={styles.columnHeader}>Cartão de Crédito</td>
                        <td style={styles.columnData}>4</td>
                        <td style={styles.columnData}>R$ 2.025,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResumeProposal