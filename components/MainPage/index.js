import React from 'react';
import FirstScreen from './FirstScreen';
import Header from './Header';
import Headline from './Headline';
import Snapshot from './Snapshot';


class MainPage extends React.Component {
  constructor () {
    super();
    this.state = {
      scrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll (e) {
    const value = document.body.scrollTop;
    const scrolled = value > 50;
    if (this.state.scrolled !== scrolled) {
      this.setState({ scrolled });
    }
    e.stopPropagation();
  }

  render () {
    return (
      <div>
        <Header scrolled={this.state.scrolled} />
        <FirstScreen>
          <Headline />
          <Snapshot />
        </FirstScreen>
        <div>asa</div>
      </div>
    );
  }
}

export default MainPage;
