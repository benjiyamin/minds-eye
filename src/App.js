import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'
import Item from './components/Item'
import Footer from './components/Footer'

class App extends React.Component {

  state = {
    selected: [],
    topScore: 0,
    images: [
      '/images/180x180-sprites/tile000.png',
      '/images/180x180-sprites/tile003.png',
      '/images/180x180-sprites/tile008.png',
      '/images/180x180-sprites/tile009.png',
      '/images/180x180-sprites/tile010.png',
      '/images/180x180-sprites/tile012.png',
      '/images/180x180-sprites/tile013.png',
      '/images/180x180-sprites/tile014.png',
      '/images/180x180-sprites/tile016.png',
      '/images/180x180-sprites/tile018.png',
      '/images/180x180-sprites/tile023.png',
      '/images/180x180-sprites/tile024.png'
    ]
  }

  reset = () => this.setState({ selected: [] })

  imageHasBeenSelected = img => {
    return this.state.selected.filter(i => { return i === img }).length ? true : false
  }

  handleClick = (evt) => {
    this.shuffleImages()
    if (this.imageHasBeenSelected(evt.target.src)) {
      // Game over
      this.setState({topScore: Math.max(this.state.topScore, this.state.selected.length)})
      this.reset()
    } else {
      // Still playing
      this.setState({ selected: [...this.state.selected, evt.target.src] })
    }
  }

  shuffleImages() {
    let array = this.state.images
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ images: array })
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.selected.length} topScore={this.state.topScore} />
        <Header />
        <Main>
          {this.state.images.map(img => {
            return <Item imgSrc={img} handleClick={this.handleClick} />
          })}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App;
