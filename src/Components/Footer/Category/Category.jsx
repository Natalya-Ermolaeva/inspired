import s from './Category.module.scss';
import cn from 'classnames';

export const Category = () => {
    return (
        <div className={s.category}>
            <h2 className={cn(s.title, s.categoryTitle)}>Каталог</h2>
            <div className={s.categoryList}>
                <div>
                    <h3 className={s.categorySubtitle}>Женщины</h3>
                    <ul className={s.categorySublist}>
                        <li><a className={s.link} href="#">Бюстгальтеры</a></li>
                        <li><a className={s.link} href="#">Трусы</a></li>
                        <li><a className={s.link} href="#">Носки</a></li>
                        <li><a className={s.link} href="#">Халаты</a></li>
                        <li><a className={s.link} href="#">Термобелье</a></li>
                        <li><a className={s.link} href="#">Пижамы</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className={s.categorySubtitle}>Мужчины</h3>
                    <ul className={s.categorySublist}>
                        <li><a className={s.link} href="#">Трусы</a></li>
                        <li><a className={s.link} href="#">Носки</a></li>
                        <li><a className={s.link} href="#">Халаты</a></li>
                        <li><a className={s.link} href="#">Термобелье</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}