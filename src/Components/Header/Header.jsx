import { Top } from "../Header/Top/Top";
import { Navigation } from "../Header/Navigation/Navigation";
import { Container } from "../Layout/Container/Container";

export const Header = ({list}) => (
    <header>
        <Container>
            <Top />
            <Navigation list={list}/>
        </Container>
    </header>
)