import {css} from 'styled-components';

const getContainerStyle = props => css`
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
const getSingleItemWrapperStyle = props => css`
    width: 100%;
    border: 2px solid var(--grey);
    border-radius: 0.5em;
    position: relative;

    &:hover {
    transition-property: border;
	transition-duration: 0.5s;
	transition-timing-function: ease-out;
    border: 2px solid var(--second-color);
}
`

const getSingleItemContainerStyle = props => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 22%;
    min-width: 22%;
    margin: 0.5em 0;

@media screen and (max-width: 768px) {
    max-width: 32%;
    min-width: 32%;
}
@media screen and (max-width: 576px) {
    max-width: 90%;
    min-width: 90%;
}



`

const getItemTitleStyle = props => css`
    font-size: 0.8em;
    color: var(--link-color);
    font-weight: 400;

`
const getItemImageStyle = props => css`
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${`url(${props.backgroundImage})`};
    border-radius: 0.5em;
    position: relative;

`

const getFiltersAreaStyle = props => css`
    background-color: var(--grey);
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
    border: 1px solid var(--text-color);

    &:focus {
    border: 1px solid var(--link-color);
    }

`

const getLabelInputStyle = props => css`
    padding: 0 1em;
`

const getSelectStyle = props => css`
    width: 5%;
    padding: 0.5em;
    box-sizing: border-box;
    outline: none;
    border: 1px solid var(--text-color);

`

export {
    getContainerStyle,
    getItemsContainerStyle,
    getSingleItemContainerStyle,
    getSingleItemWrapperStyle,
    getItemTitleStyle,
    getItemImageStyle,
    getFiltersAreaStyle,
    getFiltersContainerStyle,
    getInputStyle,
    getLabelInputStyle,
    getSelectStyle,
    getMainContainerStyle
  };
