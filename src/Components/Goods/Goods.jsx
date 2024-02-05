import { useSelector } from "react-redux";

import { Product } from "../Product/Product";
import { Container } from "../Layout/Container/Container";
import { Pagination } from "../Pagination/Pagination";

import s from "./Goods.module.scss";
import { Preloader } from "../Preloader/Preloader";

export const Goods = ({title}) => {
    const { goodsList, totalCount, status} = useSelector(state => state.goods);

    return (
        <section>
            <Container>
                <h2 className={s.title}>
                    {title ?? "Новинки"}
                    {(totalCount && totalCount > 0) && <sup>&nbsp;({totalCount})</sup>}
                </h2>
                {status === "loading" ?
                <Preloader /> 
                : (
                    <>
                        <ul className={s.list}>
                            {goodsList.map(item => (
                                <li key={item.id}>
                                    <Product {...item} />
                                </li>
                        ))}
                        </ul>
                        <Pagination />
                    </>
                )}
            </Container>
        </section>
    )
}