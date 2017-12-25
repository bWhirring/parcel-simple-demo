import React from 'react'

import ReactDom from 'react-dom'

class Test extends React.PureComponent {
  render() {
    return <h1>Hello Parcel</h1>
  }
}

ReactDom.render(<Test />, document.getElementById('root'));
