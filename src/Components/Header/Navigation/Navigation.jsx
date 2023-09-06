import { Gender } from '../Navigation/Gender/Gender'
import { Category } from '../Navigation/Category/Category'

export const Navigation = () => (
    <nav>
        <div className='container'>
            <Gender />
            <Category />
        </div>
    </nav>
)