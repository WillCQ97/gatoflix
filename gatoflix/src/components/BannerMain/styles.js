import styled from 'styled-components';

export const BannerMainContainer = styled.section`
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
    background-size: cover;
    background-position: center;
    color: var(--white);
    height: 80vh;

    /*position: relative;*/
    @media (max-width: 800px) {
        height: auto;
        min-height: 50vh;
    }
/*
    &:after,
    &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        height: 20%;
    }

    &:before {
        top: 0;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }

    &:after {
        bottom: 0;
        background: linear-gradient(0deg, #141414 0%, transparent 100%);
    }
    */
`;

export const ContentAreaContainer = styled.section`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    margin-left: 5%;
    margin-right: 5%;
    /*    
    position: relative;
    z-index: 10;
    */

    @media (max-width: 800px) {
        flex-direction: column;
        padding-top: 100px;
    }
`;

ContentAreaContainer.Item = styled.div`
    display: inline-block;
    margin-bottom: 50px;
    width: 50%;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

ContentAreaContainer.Category = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    display: inline-block; 
    padding: 25px;
    line-height: 1;
    border-radius: 4px;

    @media (max-width: 800px) {
        display: none;
        font-size: 18px;
        padding: 10px;
    }
    `;

ContentAreaContainer.Title = styled.h2`
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 32px;

    @media (max-width: 800px) {
        text-align: center;
        font-size: 32px;
    }
`;

ContentAreaContainer.Description = styled.p`
    @media (max-width: 800px) {
        display: none;
    }
`;


export const WatchButton = styled.button`
    background-color: var(--white);
    border: 0;
    border-radius: 4px;
    color: var(--black);
    cursor: pointer;
    display: none;
    
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    padding: 16px 24px;
    
    @media (max-width: 800px) {
        display: block;
    }
    
    /*
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    background: var(--white);
    border-color: var(--black);
    transition: opacity .3s;
    display: none;
    */
`;