import React from 'react'
import { Card } from 'antd'
import classNames from 'classnames'

function CardComponent(props) {
	let className = classNames({
		'mk-card': true,
		[props.className]: !!props.className
	})
	return <Card {...props} className={className} />
}

CardComponent.Meta = Card.Meta
CardComponent.Grid = Card.Grid

export default CardComponent