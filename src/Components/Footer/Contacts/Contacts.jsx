import s from './Contacts.module.scss';

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <a className={s.link} href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
            <a className={s.link} href="tel:89304902620">8 930 490 26 20</a>
        </div>
    )
}