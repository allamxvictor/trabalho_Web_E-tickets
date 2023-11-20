import Button from "../Button"
import Input from "../Input"


export default function SearchBar() {
    return (
        <>
            <form>
                <Input input_type="text"
                    input_placeholder="Busque seu evento, local ou cidade"
                    input_width="40vw" />

                <Button button_txt="Buscar" width="7vw" />
            </form>
        </>
    )
}

