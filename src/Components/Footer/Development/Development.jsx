import s from "./Development.module.scss";

export const Development = () => (
    <div className={s.development}>
        <ul className={s.developmentList}>
            <li>
                Designer: 
                <a className={s.link} href="#"> Anastasia Ilina</a>
            </li>
            <li>
                Developer:
                <a className={s.link} href="#"> Natallia Ermolaeva</a>
            </li>
        </ul>
    </div>
)