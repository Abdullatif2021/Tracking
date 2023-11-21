import React, { FC } from 'react';
import styled from 'styled-components';
const Container = styled.div`
   width: 20px;
   height: 20px;
   background-color: #dadee1;
   cursor: pointer;
`;
interface Props {
    onClick: () => void,
    children: React.ReactNode,
    color ? :string
}
const PlayButton: FC<Props> = ({ onClick, children ,color}) => {
    return (
        <Container className={`d-flex align-items-center justify-content-center ${color}`} onClick={onClick}>
            {children}
        </Container>
    );
}

export default PlayButton;
