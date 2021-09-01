import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
            <div className='card'>
                <p><strong>{name}</strong></p>
                <p>{type}</p>
                <p>{`Average Weigh: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                <img src={image} alt={`imagem do pokemon ${name}`}></img>
            </div>
        )
    }

}

export default Pokemon;