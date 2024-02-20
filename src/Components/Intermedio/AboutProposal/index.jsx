import { styles } from "./styles"

const AboutProposal = () => {
    const ellipsis = (text) => {
        return text.substring(0,23) + '...'
    }

    return (
        <div style={styles.container}>
            <table>
                <tbody>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}>RAZAO SOCIAL:</td>
                        <td style={styles.columnData}>Minha LTDA</td>
                        <td style={styles.columnHeader}>UF:</td>
                        <td style={styles.columnData}>SP</td>
                    </tr>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}>NOME FANTASIA:</td>
                        <td style={styles.columnData}>{ellipsis('TECNOLOGIA DA INFORMAÇÃO')}</td>
                        <td style={styles.columnHeader}>E-MAIL:</td>
                        <td style={styles.columnData}>lucaspagani.contato@outlook.com</td>
                    </tr>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}>CNPJ:</td>
                        <td style={styles.columnData}>00.000.000/0000-00</td>
                        <td style={styles.columnHeader}>TELEFONE:</td>
                        <td style={styles.columnData}>-</td>
                    </tr>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}>ENDERECO:</td>
                        <td style={styles.columnData}>Praca Sao Crispim, 123</td>
                        <td style={styles.columnHeader}>INSTAGRAM:</td>
                        <td style={styles.columnData}>-</td>
                    </tr>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}>CEP:</td>
                        <td style={styles.columnData}>05050-080</td>
                        <td style={styles.columnHeader}>DATA DE ENVIO:</td>
                        <td style={styles.columnData}>-</td>
                    </tr>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}>BAIRRO:</td>
                        <td style={styles.columnData}>Lapa</td>
                        <td style={styles.columnHeader}>DATA DE VALIDADE</td>
                        <td style={styles.columnData}>-</td>
                    </tr>
                    <tr style={styles.row}>
                        <td style={styles.columnHeader}>MUNICIPIO:</td>
                        <td style={styles.columnData}>-</td>
                        <td style={styles.columnHeader}>SEGMENTO:</td>
                        <td style={styles.columnData}>Tecnologia</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AboutProposal
