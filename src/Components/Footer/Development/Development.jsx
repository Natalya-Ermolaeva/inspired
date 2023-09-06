import s from './Development.module.scss';

export const Development = () => {
    return (
       <div className={s.development}>
            <ul className={s.developmentList}>
                <li className={s.link}><a href="#">Designer: Anastasia Ilina</a></li>
                <li className={s.link}><a href="#">Developer: </a></li>
            </ul>
       </div>
    )
}