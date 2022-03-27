import Link from 'next/link';

const Nav = () => {
  return (
    <div className={navStyles.nav}>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav