import { useSelector } from "react-redux";
import { Color } from "../ColorList/Color/Color";
import { ColorLabel } from "../ColorList/ColorLabel/ColorLabel";
import s from "./ColorList.module.scss";

export const ColorList = ({colors, selectedColor, handleColorChange}) => {
    const { colorList } = useSelector(state => state.color);

    return handleColorChange ? (
        <div className={s.colorList}>
            {colors?.map((id, i) => {
                const color = colorList.find(color => color.id === id);
                return <ColorLabel
                    key={id} 
                    color={color} 
                    check={!i}
                    selectedColor={selectedColor}
                    handleColorChange={handleColorChange}/>
            })}
        </div>
        ) : (
            <ul className={s.colorList}>
                {colors?.map((id, i) => {
                    const color = colorList.find(color => color.id === id);
                    return <Color key={id} color={color?.code} check={!i}/>
                })}
            </ul>
            )
}