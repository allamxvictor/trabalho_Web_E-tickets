import styles from "./Input.module.css"
import PropTypes from "prop-types"


// Não está funcional! Corrigir cód dps...
export default function Input({ input_type, input_placeholder, input_id, input_name, input_width}) {
    return (

        <>
            <input className={styles.input_styles}
                type={input_type}
                placeholder={input_placeholder}
                id={input_id} name={input_name}
                style={{ width: input_width}} />
        </>

    )

}



Input.propTypes = {
    input_type: PropTypes.string,
    input_placeholder: PropTypes.string,
    input_id: PropTypes.string,
    input_name: PropTypes.string,
    input_width: PropTypes.string,
}

Input.defaultProps = {// valores padrão do Input caso não sejam passado como props
    input_type: "text",
    input_width: "23vw",
    input_placeholder: "",
    input_id: "",
    input_name: ""
}