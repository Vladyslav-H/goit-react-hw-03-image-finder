import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Header, ButtonStyled, InputStyled } from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChange = e => {
    this.setState({ searchName: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.searchName) {
      return toast.info('Please, enter a search name');
    }

    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <InputStyled
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleChange}
          />
          <ButtonStyled type="submit">
            <span style={{ marginRight: '10px' }}>Search </span>
            <span>
              <BiSearchAlt />
            </span>
          </ButtonStyled>
        </form>
      </Header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
