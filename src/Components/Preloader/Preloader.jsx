import { Puff} from "react-loader-spinner";


const style = {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px 0',
}

export const Preloader = () => (
    <div style={style}>
        <Puff 
            height="80"
            width="80"
            color="#8a8a8a"
            ariaLabel="puff-loading"
        />
    </div>
)