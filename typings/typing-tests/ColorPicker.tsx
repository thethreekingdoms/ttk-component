import * as React from 'react'
import { ColorPicker } from 'TTK-Component'
import { ColorPicker as ColorPickerNext } from 'TTK-Component/next'

class Component extends React.Component<{}, {}> {
  format: 'hsl' | 'hsv' | 'hex' | 'rgb'
  onChange = (color) => { }
  render() {
    return (
      <div>
        <ColorPicker className="className" style={{ width: 100 }} />
        <ColorPicker value="#ffffff" showAlpha={true} colorFormat={this.format} onChange={this.onChange} />

        <ColorPickerNext className="className" style={{ width: 100 }} />
        <ColorPickerNext value="#ffffff" showAlpha={true} colorFormat={this.format} onChange={this.onChange} />
      </div>
    )
  }
}
