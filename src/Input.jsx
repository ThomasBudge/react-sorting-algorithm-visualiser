import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
    };
  }

  handleChange(e) {
    const input = e.target.value;
    const { setArray } = this.props;
    this.setState({ input });

    const array = input.split(' ');
    setArray(array);
  }

  submit() {
    const { startSort } = this.props;
    startSort();
  }

  render() {
    const { input } = this.state;
    return (
      <div className="user-input">
        <input
          type="text"
          value={input}
          placeholder="Numbers to sort..."
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="submit"
          value="Begin Sorting"
          onClick={() => this.submit()}
        />
      </div>
    );
  }
}

Input.propTypes = {
  setArray: PropTypes.func.isRequired,
  startSort: PropTypes.func.isRequired,
};

export default Input;
