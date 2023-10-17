import { Top } from "../Header/Top/Top";
import { Navigation } from "../Header/Navigation/Navigation";
import { Container } from "../Layout/Container/Container";

import s from "./Header.module.scss";

export const Header = () => (
    <header className={s.header}>
        <Container>
            <Top />
            <Navigation/>
        </Container>
    </header>
)