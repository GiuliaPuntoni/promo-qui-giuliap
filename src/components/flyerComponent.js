import styled from 'styled-components';
import React from 'react';
import {
    getItemsContainerStyle,
    getSingleItemContainerStyle,
    getItemTitleStyle,
    getItemImageStyle,
} from './flyerComponenentStyle';



const ItemsContainer = styled.div`${getItemsContainerStyle}`;
const SingleItemContainer = styled.div`${getSingleItemContainerStyle}`;
const ItemTitle = styled.h2`${getItemTitleStyle}`;
const ItemImage = styled.div`${getItemImageStyle}`;

const Flyers = ({flyers}) => {
    return (
            <ItemsContainer className={'items-container'}>
            {flyers.map((flyer) => (
                    <SingleItemContainer className={flyer.id}>
                        <ItemTitle>{flyer.name}</ItemTitle>
                        <ItemImage
                            backgroundImage={flyer.retailer.images.lg}
                        />
                    </SingleItemContainer>
               
            ))}
            </ItemsContainer>

    )
};

export default Flyers