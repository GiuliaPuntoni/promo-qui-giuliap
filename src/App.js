import styled from 'styled-components';
import React from 'react';
import './App.css';
import Flyer from './components/flyerComponent';

import {
  getContainerStyle,
  getFiltersAreaStyle,
  getFiltersContainerStyle,
  getInputStyle,
  getLabelInputStyle,
  getSelectStyle,
  getMainContainerStyle,
} from './components/flyerComponenentStyle';

const API_PATH = 'https://pq-leaflets.herokuapp.com/api/leaflets/filter';

const Container = styled.div`${getContainerStyle}`;
const MainContainer = styled.div`${getMainContainerStyle}`;

const FiltersArea = styled.div`${getFiltersAreaStyle}`;
const FiltersContainer = styled.div`${getFiltersContainerStyle}`;
const Input = styled.input`${getInputStyle}`;
const InputLabel = styled.p`${getLabelInputStyle}`;
const Select = styled.select`${getSelectStyle}`;



class PromoQui extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.apiLeafletsCall = this.apiLeafletsCall.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      flyers: [],
      selectValue: 30
    }
  }

  apiLeafletsCall(addingUrl = '') {
    const apiUrl = `${API_PATH}${addingUrl}`;
    return (
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log('funzione', data)
        this.setState({ flyers:
          data.data.leaflets})
      })
    )
  };

  componentDidMount() {
    this.apiLeafletsCall();
  }

  onBlur(e) {
    const value = e.target.value;

    const flyersState = this.state.flyers;

    const flyersNew = flyersState.filter(flyer => (flyer.name).toLowerCase().toString().includes(value));
    const flyersNewDef = e.target.value === null || e.target.value === '' ?  flyersState : flyersNew;

    this.setState({ flyers: flyersNewDef})

    const apiString = `?name=${value}`;
    this.apiLeafletsCall(apiString);
  };

  onChangeInput(e) {
    const value = e.target.value;

    const apiString = `?name=${value}`;
    this.apiLeafletsCall(apiString);
  };

  onChange(e) {
    
    const value = e.target.value;

    this.setState({  selectValue: value })

    const apiString = `?limit=${value}`;
    this.apiLeafletsCall(apiString);
  }


  render() {
  return (
    <MainContainer>
    <h1>Flyers List</h1>
      <FiltersArea>
        <FiltersContainer>
            <InputLabel>Max. flyers in page</InputLabel>
                <Select
                    onChange={this.onChange}
                    value={this.state.selectValue}
                >
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="80">80</option>
                <option value="100">100</option>
                </Select>
                <InputLabel>Filter by name</InputLabel>
                <Input
                    // onChange={this.onChangeInput}
                    onBlur={this.onBlur}
                >
                </Input>
            </FiltersContainer>
          </FiltersArea>
        <Container>
      <Flyer flyers={this.state.flyers} />
    </Container>
      
    </MainContainer>
  );
}
};

PromoQui.defaultProps = {

};

export default PromoQui;