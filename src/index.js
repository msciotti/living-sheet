import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import characterSheet from './stores/Reducers';
import VisibleSkillList from './components/VisibleSkillList';
import VisibleStatList from './components/VisibleStatList';

const store = createStore(characterSheet);

class CharacterSheet extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div>
          <VisibleStatList />
          <VisibleSkillList />
        </div>
      </Provider>
    );
  }
}

var mount = document.getElementById('index');
ReactDOM.render(<CharacterSheet />, mount);
