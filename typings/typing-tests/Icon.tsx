import * as React from 'react'
import { Icon } from 'TTK-Component'
import { Icon as IconNext } from 'TTK-Component/next'

class Component extends React.Component<{}, {}> {
  onClose = () => { }
  render() {
    return (
      <div>
        <Icon name="el-icon-edit" className="className" style={{ width: 100 }} />
        <Icon name="el-icon-edit" />

        <IconNext name="el-icon-edit" className="className" style={{ width: 100 }} />
        <IconNext name="el-icon-edit" />
      </div>
    )
  }
}
