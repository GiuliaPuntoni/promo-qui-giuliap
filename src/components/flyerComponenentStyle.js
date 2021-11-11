import {css} from 'styled-components';

const getContainerStyle = props => css`
font-family: 'Roboto', sans-serif;
text-align: center;
@media screen and (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
}
`

const getMainContainerStyle = props => css`
width: 100%;
margin: 0;
text-align: center;
`


const getItemsContainerStyle = props => css`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 0 1em;
margin-top: 1em;
@media screen and (max-width: 576px) {
    flex-direction: column;
}
`

const getSingleItemContainerStyle = props => css`
display: flex;
flex-direction: column;
align-items: center;
flex-grow: 1 1 auto;
max-width: 22%;
min-width: 22%;
border: 2px solid #d9d9d9;
border-radius: 0.5em;
padding: 0em 0.5em 1em 0.5em;
margin: 0.5em 0;
@media screen and (max-width: 768px) {
    max-width: 32%;
    min-width: 32%;
}
@media screen and (max-width: 576px) {
    max-width: 90%;
    min-width: 90%;
}

&:hover {
    transition-property: opacity;
    opacity: 0.5;
	transition-duration: 0.5s;
	transition-timing-function: ease-out;
}
`

const getItemTitleStyle = props => css`
font-size: 1em;

`
const getItemImageStyle = props => css`
width: 100%;
height: 200px;
background-position: center;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
background-image: ${`url(${props.backgroundImage})`};
`

const getFiltersAreaStyle = props => css`
    background-color: #e9e9e9;
    padding: 0.5em;
    
  }
`

const getFiltersContainerStyle = props => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
    }
`

const getInputStyle = props => css`
    width: 20%;
    padding: 0.5em;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #808080;

    &:focus {
    border: 1px solid #555;

`

const getLabelInputStyle = props => css`
padding: 0 1em;
`

const getSelectStyle = props => css`
    width: 5%;
    padding: 0.5em;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #808080;

    &:focus {
    border: 1px solid #555;
`

export {
    getContainerStyle,
    getItemsContainerStyle,
    getSingleItemContainerStyle,
    getItemTitleStyle,
    getItemImageStyle,
    getFiltersAreaStyle,
    getFiltersContainerStyle,
    getInputStyle,
    getLabelInputStyle,
    getSelectStyle,
    getMainContainerStyle
  };
