import styled from 'styled-components';
import React from 'react';
import {
    getItemsContainerStyle,
    getSingleItemContainerStyle,
    getSingleItemWrapperStyle,
    getItemTitleStyle,
    getItemImageStyle,
} from './flyerComponenentStyle';



const ItemsContainer = styled.div`${getItemsContainerStyle}`;
const SingleItemContainer = styled.div`${getSingleItemContainerStyle}`;
const SingleItemWrapper = styled.div`${getSingleItemWrapperStyle}`;
const ItemTitle = styled.h2`${getItemTitleStyle}`;
const ItemImage = styled.div`${getItemImageStyle}`;

const Flyers = ({flyers}) => {
    return (
            <ItemsContainer className={'items-container'}>
            {flyers.map((flyer) => (
                
                    <SingleItemContainer className={'box'}>
                        <SingleItemWrapper className={'card'}>
                        <ItemImage
                            className={'image-box'}
                            backgroundImage={flyer.retailer.images.lg}
                        >
                        </ItemImage>
                        <div className={'hover-box'}>
                            <h4>Retailer: {flyer.retailer.name}</h4>
                            <p>Distance: {flyer.retailer.distance}</p>
                            <p>Priority: {flyer.retailer.priority}</p>
                        </div>
                        </SingleItemWrapper>
                        <ItemTitle className={'title-box'}>{flyer.name}</ItemTitle>
                    </SingleItemContainer>
            ))}
            </ItemsContainer>

    )
};

export default Flyers