import { styles } from "./style"
import { fontFamily } from "../../indexStyles"

export const TitleGenerics = ({title}) => {
    return (
        <div style={{...styles.title, ...fontFamily.fontFamilyBold}}>{title}</div>
    )
}