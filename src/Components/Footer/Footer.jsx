import { Container } from "../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Social } from "./Social/Social";
import { Contacts } from "./Contacts/Contacts";
import { Copyright} from "./Copyright/Copyright";
import { Development } from "./Development/Development";
import s from "./Footer.module.scss";

export const Footer = () => (
    <Container className={s.container}>
        <Category/>
        <Social />
        <Contacts />
        <Copyright />
        <Development />
    </Container>
)