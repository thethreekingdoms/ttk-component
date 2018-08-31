import * as React from 'react'
import { Badge } from 'TTK-Component'
import { Badge as BadgeNext } from 'TTK-Component/next'

class Component extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Badge className="className" style={{ width: 100 }}>
          <div>badge</div>
        </Badge>
        <Badge value="提醒">
          <div>badge</div>
        </Badge>
        <Badge value={10} max={8} isDot={false}>
          <div>badge</div>
        </Badge>

        <BadgeNext className="className" style={{ width: 100 }}>
          <div>badge</div>
        </BadgeNext>
        <BadgeNext value="提醒">
          <div>badge</div>
        </BadgeNext>
        <BadgeNext value={10} max={8} isDot={false}>
          <div>badge</div>
        </BadgeNext>
      </div>
    )
  }
}
