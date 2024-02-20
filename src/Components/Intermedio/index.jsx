import Image from "next/image";
import logo from '../../../public/assets/logos/logoGit.png';
import AboutProposal from "./AboutProposal";
import CommericalProposal from "./CommercialProposal";
import ProposalDivisor from "./ProposalDivisor";
import ResumeProposal from "./ResumeProposal";
import { styles } from "./indexStyles";


const Intermedio = () => {

    return (
        <div style={styles.container}>
            <div style={styles.LogoContainer}>
                <Image
                    src={logo}
                    style={styles.logo}
                />
            </div>
            <CommericalProposal />
            <AboutProposal />
            <ProposalDivisor Titulo={'RESUMO DA PROPOSTA'} />
            <ResumeProposal />
        </div>
    )
}

export default Intermedio;