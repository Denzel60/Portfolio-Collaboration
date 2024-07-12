import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Blogs'>Blogs</Link>
            <Link to='/Work'>Work</Link>
        </div>
    )
}

export default Header