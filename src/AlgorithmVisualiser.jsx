import React from 'react';
import delay from 'delay';
import Number from './Number';
import Input from './Input';
import Dropdown from './Dropdown';

class AlgorithmVisualiser extends React.Component {
  constructor() {
    super();

    this.state = {
      swap: true,
      sorted: false,
      array: [],
      speed: 500,
      algorithm: 'bubble',
      algorithmTitle: 'Bubble Sort',
      algorithms: {
        bubble: {
          title: 'Bubble Sort',
          method: this.bubbleSort,
        },
        insertion: {
          title: 'Insertion Sort',
          method: this.insertionSort,
        },
        merge: {
          title: 'Merge Sort',
          method: this.insertionSort,
        },
      },
    };
  }

  setAlgorithm(algorithm) {
    const { algorithms } = this.state;
    this.setState({ algorithmTitle: algorithms[algorithm].title });
  }

  setArray(stringArray) {
    const intArray = [];
    for (let i = 0; i < stringArray.length; i += 1) {
      const int = parseInt(stringArray[i], 10);
      if (!isNaN(int)) intArray.push(int);
    }
    this.setState({ array: intArray });
  }

  startSort() {
    const { algorithm, algorithms } = this.state;
    algorithms[algorithm].method();
  }

  async bubbleSort() {
    /**
     * Pseudo Code
     * ===============================
     * swap <- false
     * while !swap:
     *    for i in A.length:
     *        swap <- true
     *        if A[i] > A[i + 1]:
     *            temp = A[i + 1]
     *            A[i + 1] <- A[i]
     *            A[i] <- temp
     *            swap <- false
     *
     * This is the simplest sorting algorithm where
     * for each itteration, atleast one value is moved to the end.
     */
    const { array } = this.state;
    // Keep looping until a full sweep has been done without any swaps
    // as this point we know that the array is sorted.
    while (this.state.swap) {
      // We assume the array is sorted at this stage and say we have no swaps
      this.setState({ swap: false });
      for (let i = 0; i < array.length; i += 1) {
        await delay(this.state.speed);
        // If an item is out of order then we swap it
        if (array[i] > array[i + 1]) {
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          // A swap has occured therefore the array was not in sorted state.
          this.setState({ swap: true, array });
        }
      }
    }

    this.setState({ sorted: true });
  }

  async insertionSort() {
  /**
   * Pseudo Code
   * ===============================
   * for i in A.length:
   *    key <- A[i]
   *    j <- i - 1
   *    while j > 0 and A[j] > key:
   *        A[j] <- A[j+1]
   *        j <- j - 1
   *
   * This algorithm is how many people sort a hand of
   * cards starting with the left hand empty and all the cards in the right.
   * We move the first card from our right hand and place it in our left.
   */
    const { array } = this.state;
    // We begin counting from 1 as the card at index 0 is the first card we are comparing against.
    for (let i = 1; i < array.length; i += 1) {
      await delay(this.state.speed);
      // This is the current card we're sorting.
      const key = array[i];
      // We always begin comparing right to left, therefore
      // we will start j which is the first card in the left hand which is the sorted side.
      let j = i - 1;
      // While j is larger than 0
      // and the current card is larger than the right most card in the left hand
      // we want to swap the larger card with the smaller card
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        // We continue checking if it's the smallest
        // whilst decrementing jto prevent an infinate loop
        j -= 1;
      }
      // We complete the swap by replacing j + 1 with the current card
      array[j + 1] = key;
      this.setState({ array });
    }
  }

  /**
   * Takes a targetIndex of an element, currentIndex of an element and moves it into place.
   *
   * @param {int} targetIndex
   * @param {int} currentIndex
   * @param {int} value
   */
  insert(targetIndex, currentIndex) {
    const { array } = this.array;
    array.splice(targetIndex, 0, array[currentIndex]);
  }


  render() {
    const { algorithmTitle } = this.state;

    return (
      <div>
        <div className="nav">
          <div className="nav__logo">Sorting Algorithms</div>
          <Dropdown algorithmTitle={algorithmTitle} setAlgorithm={(e) => this.setAlgorithm(e)} />
        </div>
        <div className="numbers">
          {this.state.array.map((item, i) => (
            <Number sorted={this.state.sorted} key={i} number={item} />
          ))}
        </div>
        <Input
          setArray={(array) => this.setArray(array)}
          startSort={() => this.startSort()}
        />
      </div>
    );
  }
}

export default AlgorithmVisualiser;
