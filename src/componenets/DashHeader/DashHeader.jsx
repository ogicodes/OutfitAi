import lookinglass from '../../assets/images/search.svg'
import { slide as Menu } from "react-burger-menu";
import '../DashHeader/DashHeader.scss'
import { Link } from 'react-router-dom';

export default function DashHeader() {
    return(
        <header className="dash-header">
            <div className="dash-header__left">
                <img className='dash-header__search' src={lookinglass} alt="search bar" />
            </div>
            <div className="dash-header__middle">
                <Link className='dash-header__link' to={'/dashboard'}><h1 className='dash-header__title'>OUTFITAI</h1></Link>
            </div>
            <div className="dash-header__right">
                <Menu width={ '50%' } right>
                <Link to={'/savedfits'}>
                        <p>Outfit Library</p>
                    </Link>
                    <Link to={'/randomfit'}>
                        <p>generate random</p>
                    </Link>
                    <Link to={'/generate'}>
                        <p>generate outfit</p>
                    </Link>                    
                    <p>settings</p>
                </Menu>
            </div>
        </header>
    )
}