import './index.scss'
import LogoN from '../../assets/images/N-logo-2.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link } from 'react-router-dom';


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoN} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="nikhil" />
        </Link>
    </div>
)

export default Sidebar;