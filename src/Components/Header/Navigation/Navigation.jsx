import { Gender } from "../Navigation/Gender/Gender";
import { Category } from "../Navigation/Category/Category";

export const Navigation = ({list}) => (
    <nav>
        <div className='container'>
            <Gender list={list}/>
            <Category list={list}/>
        </div>
    </nav>
)