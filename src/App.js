import React, { Component } from 'react';

const data = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
];
const sortedData = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
].sort();
let binaryCount = 0;
let binaryString = '';

class App extends Component {
  state = {
    linearSearch: '',
    binarySearch: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    this.indexOf(data, value);
    this.binarySearch(sortedData, value, 0, data.length);
  };

  indexOf = (array, value) => {
    let newString = '';
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      count++;
      if (array[i] == value) {
        newString = `Found ${value} in ${count} step(s) using linear search`;
        this.setState({
          linearSearch: newString,
        });
        return i;
      }
    }
    newString = `Could not find ${value} in ${count} steps using linear search`;
    this.setState({
      linearSearch: newString,
    });
    return -1;
  };

  binarySearch = (array, value, start, end) => {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if (start > end) {
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    binaryCount++;

    console.log(start, end);
    if (item == value) {
      binaryString = `Found ${value} in ${binaryCount} step(s) using binary search`;
      this.setState({
        binarySearch: binaryString,
      });
      binaryCount = 0;
      return index;
    } else if (item < value) {
      return this.binarySearch(array, value, index + 1, end);
    } else if (item > value) {
      return this.binarySearch(array, value, start, index - 1);
    }
    binaryString = `Could not find ${value} in ${binaryCount} step(s) using binary search`;
    this.setState({
      binarySearch: binaryString,
    });
    binaryCount = 0;
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="search" name="search" />

          <input type="submit" />
        </form>
        <div>
          <p>{this.state.linearSearch}</p>
          <p>{this.state.binarySearch}</p>
        </div>
      </div>
    );
  }
}

export default App;
