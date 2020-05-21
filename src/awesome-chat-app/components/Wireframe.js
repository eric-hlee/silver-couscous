import React from 'react'
import SplitPane from './SplitPane'
import AddChat from '../containers/AddChat'
import History from '../containers/ChatHistory'
import Chat from '../containers/RenderChat'

class Wireframe extends React.Component {

  render() {

    const style_wireframe = {
      height: '80vh',
    }

    return (
      <div className="Wireframe" style={style_wireframe}>
        <AddChat title="An awesome chat app using Redux"></AddChat>
        <SplitPane
            left={
              <History />
            }
            right={
              <Chat />
            }
          />
      </div>
    );
  }
}

export default Wireframe