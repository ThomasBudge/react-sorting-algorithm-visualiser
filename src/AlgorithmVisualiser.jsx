import React from 'react';
import delay from 'delay';
import Title from './Title';
import Number from './Number';
import Input from './Input';

class AlgorithmVisualiser extends React.Component {
  constructor() {
    super();

    this.state = {
      swap: true,
      sorted: false,
      array: [],
      speed: 500,
    };

    this.styles = {
      container: {
        display: 'flex',
      },
      bar: {
        padding: '10px',
        backgroundColor: '#F2F2F2',
        marginRight: '10px',
        borderRadius: '2px',
        fontSize: '22px',
        fontWeight: '700',
      },
    };
  }

  setArray(stringArray) {
    const intArray = [];
    for (let i = 0; i < stringArray.length; i += 1) {
      const int = parseInt(stringArray[i], 10);
      if (!Number.isNaN(int)) intArray.push(int);
    }
    this.setState({ array: intArray });
  }

  startSort() {
    this.bubbleSort();
  }

  async bubbleSort() {
    const { array } = this.state;

    while (this.state.swap) {
      this.setState({ swap: false });
      for (let i = 0; i < array.length; i += 1) {
        if (array[i] > array[i + 1]) {
          await delay(this.state.speed);
          this.swap(i);
          this.setState({ swap: true });
        }
      }
    }

    this.setState({ sorted: true });
  }

  swap(i) {
    const { array } = this.state;
    const temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
    this.setState({ array });
  }


  render() {
    return (
      <div>
        <Title title="Bubble Sort" />
        <div className="container">
          <div style={this.styles.container}>
            {this.state.array.map((item, i) => (
              <Number sorted={this.state.sorted} key={i} number={item} />
            ))}
          </div>
          <Input
            setArray={(array) => this.setArray(array)}
            startSort={() => this.startSort()}
          />
        </div>
      </div>
    );
  }
}

export default AlgorithmVisualiser;
