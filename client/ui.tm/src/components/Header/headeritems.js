import style from './Header.module.css'

const HeaderItems = ({ name }) => {
    return (
        <>
            <p className={style['test']}>{name}</p>
        </>
    )
}

export { HeaderItems }