import HeaderStyles from '../styles/HeaderStyles.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={HeaderStyles.title}>
            <span>Webdev</span> Newz
        </h1>
        <p className={HeaderStyles.description}>
            Keep up to date with the latest news
        </p>
    </div>
  )
}

export default Header