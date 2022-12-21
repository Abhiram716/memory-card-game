import React from 'react'
import Card from './Card'

export default function Board( props ) {

    const {onCardClick, data} = props
    return (
        <div className='board'>
            {data.map(dataItem => <Card key={dataItem.id} title={dataItem.name} imgUrl={dataItem.image} onCardClick={onCardClick} />)}
        </div>
  )
}

