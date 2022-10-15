import './style.css'
import Logout from '../../assets/log-out.svg'

export function CardUser(props) {
    return (
     <div className='cardUser'>
        <div className='user-avatar'>
            {props.showIcon && <img src={props.avatar} alt="" className='avatar'/>}
        </div>
        <div className='user-info'>
            {props.showIcon && <h2>{props.name}</h2>}
            {props.showIcon && <p>{props.profession}</p>}
        </div>
        <div className='icon-user'>
            <img src={Logout} alt="" />
        </div>
     </div>
    )
}

