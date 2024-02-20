import Image from 'next/image'
import logo from '../../../../public/assets/logos/logoGitWhite.png'
import { styles } from './styles'

const ProposalDivisor = ({ Titulo }) => {
    return (
        <div style={styles.container}>
            <div>
                <div style={styles.text}>{Titulo}</div>
                <div style={styles.text}>LUCAS PAGANI</div>
            </div>
            <div>
                <Image
                    src={logo}
                    style={styles.logo}
                />
            </div>
        </div>
    )
}

export default ProposalDivisor