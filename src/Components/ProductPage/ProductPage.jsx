import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../features/productSlice";
import cn from "classnames";

import { Container } from "../Layout/Container/Container";
import { API_URL } from "../../const";
import { ColorList } from "../ColorList/ColorList";

import s from "./ProductPage.module.scss";
import { ProductSize } from "../ProductSize/ProductSize";
import { Count } from "../Count/Count";
import { Goods } from "../Goods/Goods";
import { fetchGoods } from "../../features/goodsSlice";
import { BtnLike } from "../BtnLike/BtnLike";
import { addToCart} from "../../features/cartSlice";

export const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { colorList } = useSelector(state => state.color);
    const { pic, description, title, price, colors, size, gender, category} = useSelector(state => state.product.product);
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [count, setCount] = useState(1);

    const handleColorChange = (e) => {
        setSelectedColor(e?.target.value);
    } 

    const handleSizeChange = (e) => {
        setSelectedSize(e?.target.value);
    } 

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    } 

    const handleDecrement = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    } 

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id])

    useEffect(() => {
         dispatch(fetchGoods({gender, category, count: 4, top: true, exclude: id}));
    }, [gender, category, dispatch, id])

    useEffect(() => {
        if (colorList?.length && colors?.length) {
            setSelectedColor(colorList.find(color => color.id === colors[0]).title);
        }
    }, [colorList, colors])

    return (
    <>
        <section className={s.card}>
            <Container className={s.container}>
                <img className={s.image} src={`${API_URL}/${pic}`} alt={description} />
                <form 
                    className={s.content}
                    onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(
                            addToCart({
                            id, 
                            color: selectedColor, 
                            size: selectedSize, 
                            count
                        })
                        )
                    }}
                    >
                        <h2 className={s.title}>{title}</h2>
                        <p className={s.price}>руб {price}</p>
                        <p className={s.vendorCode}>
                            <span className={s.subtitle}>Артикул:</span>{id}
                        </p>
                        <div className={s.color}>
                            <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
                            <ColorList 
                                colors={colors}
                                selectedColor={selectedColor}
                                handleColorChange={handleColorChange}
                                />
                        </div>
                        <ProductSize 
                            size={size} 
                            selectedSize={selectedSize}
                            handleSizeChange={handleSizeChange}/>
                        <div className={s.description}> 
                            <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
                            <p className={s.descriptionText}>{description}</p>
                        </div>
                        <div className={s.control}>
                            <Count count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
                            <button className={s.addCart}>В корзину</button>
                            <BtnLike id={id}/>
                        </div>
                </form>
            </Container>
        </section>
        <Goods title="Вам также может понравиться"/>
    </>
)}