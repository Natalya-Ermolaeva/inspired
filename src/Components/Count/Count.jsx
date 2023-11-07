import s from "./Count.module.scss";
import cn from "classnames";

export const Count = ({count, handleIncrement, handleDecrement}) => (
    <div className={s.count}>
        <button className={s.item} type="button" onClick={handleDecrement}>-</button>
        <span className={cn(s.item, s.number)}>{count}</span>
        <button className={s.item} type="button" onClick={handleIncrement}>+</button>
    </div>
)