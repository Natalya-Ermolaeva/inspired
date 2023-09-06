import cn from 'classnames'
import s from './Container.module.scss'

export const Container = (props) => (
    <div className={cn(s.container, props.className)}>{props.children}</div>
)