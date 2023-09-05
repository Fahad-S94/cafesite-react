import { Container } from "reactstrap"
import Menu from "../features/menu/Menu"
import SubHeader from "../components/SubHeader"

const MenuPage = () => {
    return (
        <Container>
            <SubHeader current="Menu" />
            <Menu />
        </Container>
    )
}

export default MenuPage