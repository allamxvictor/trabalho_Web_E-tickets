import styles from "./Button.module.css"
import PropTypes from "prop-types"

export default function Button({ button_txt, width }) { // após substituir pelo button padrão do html esse será deletado por nn ser funcional com funcões de eventos
    return (
        <>
            <input className={styles.button_styles}
                type="button" value={button_txt}
                style={{ width: width }} />
        </>
    )
}

Button.propTypes = {// tipo da prop
    button_txt: PropTypes.string,
    width: PropTypes.string
}

Button.defaultProps = {// valores padrão do Button caso não sejam passado como props
    button_txt: "Insert_Txt",
    width: "10vw"
}