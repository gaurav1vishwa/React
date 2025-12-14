import React from 'react'
import { Mail, Star } from 'lucide-react';

const card = (props) => {
    return (
        <div className='parent'>
            <div className="card">
                <div className="navbar">
                    <span className='a'> <Mail />  </span>
                    <span><img src={props.image} alt="" /></span>
                    <span className='b'> <Star /> </span>
                </div>
                <div className="header">
                    <h1>{props.name}</h1>
                    <h6>{props.username}</h6>
                </div>
                <div className="main">
                    <p>{props.info}</p>
                </div>
                <div className="graph">
                    <div className="a">
                        <span>{props.project}</span>
                        <p>project</p>
                    </div>
                    <div className="b">
                        <span>{props.totaltask}</span>
                        <p>task</p>
                    </div>
                    <div className="c">
                        <span>{props.projectCompletion} %</span>
                        <p>prasent</p>
                    </div>
                </div>
                <div className="footer">
                    <div className="a">
                        <nav>member rating</nav>
                        <nav>{props.ratings} point</nav>
                    </div>
                    <div className="b">
                        <p></p>
                    </div>
                </div>
            </div>

        </div>
      
    )
}

export default card 
