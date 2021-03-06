import React from 'react'
import { List, Card } from 'antd'
import classNames from 'classnames'

function ListComponent(props) {
    let className = classNames({
        'mk-list': true,
        [props.className]: !!props.className
    })
    return <List {...props} className={className} >
    </List>
}

ListComponent.Item = List.Item

export default ListComponent