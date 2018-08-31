import * as React from 'react'
import { AutoComplete, Icon } from 'TTK-Component'
import { AutoComplete as AutoCompleteNext } from 'TTK-Component/next'

class Component extends React.Component<{}, {}> {
  fetchSuggestions = (queryString, cb) => { }
  onSelect = (item) => { }
  onIconClick = () => { }
  render() {
    return (
      <div>
        <AutoComplete className="className" style={{ width: 100 }} />
        <AutoComplete icon={<Icon name="el" />} size="large" />
        <AutoComplete size="small" />
        <AutoComplete popperClass="class" placeholder="placeholder" disabled={true} name="name" size="mini" value="123" triggerOnFocus={true} fetchSuggestions={this.fetchSuggestions} onSelect={this.onIconClick} onIconClick={this.onIconClick} icon="el" append={(<div>s</div>)} prepend={(<div>s</div>)} />

        <AutoCompleteNext className="className" style={{ width: 100 }} />
        <AutoCompleteNext icon={<Icon name="el" />} size="large" />
        <AutoCompleteNext size="small" />
        <AutoCompleteNext popperClass="class" placeholder="placeholder" disabled={true} name="name" size="mini" value="123" triggerOnFocus={true} fetchSuggestions={this.fetchSuggestions} onSelect={this.onIconClick} onIconClick={this.onIconClick} icon="el" append={(<div>s</div>)} prepend={(<div>s</div>)} />
      </div>
    )
  }
}
