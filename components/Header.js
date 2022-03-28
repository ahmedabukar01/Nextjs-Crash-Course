import HeaderStyles from '../styles/HeaderStyles.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={HeaderStyles.title}>
            <span>Webdev</span> Newz
        </h1>
    </div>
  )
}

export default Header