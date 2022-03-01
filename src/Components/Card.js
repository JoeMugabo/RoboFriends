import React from 'react'

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-blue dib br1 pa3 ma3 grow bw2 shadow-5'>
            <img alt='MyNiggas' src={`https://robohash.org/${name}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card