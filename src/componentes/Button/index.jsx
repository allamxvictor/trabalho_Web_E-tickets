import styles from "./Button.module.css"
import PropTypes from "prop-types"

export default function Button({button_txt}) {
    return (
        <>
            <input type="button" value={button_txt} className={styles.button_styles} />

        </>
    )
}

Button.propTypes = {
    button_txt: PropTypes.string
}

Button.defaultProps = {
    button_txt: "Insert_Txt"
}