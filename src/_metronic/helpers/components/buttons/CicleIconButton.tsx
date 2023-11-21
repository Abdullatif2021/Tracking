import React, { FC } from 'react';
import styled from 'styled-components';
const Container = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: #0095e8;
   color: #ffff;
   cursor: pointer;
`;
interface Props {
    onClick: () => void,
    children: React.ReactNode,
    color ? :string
}
const CicleIconButton: FC<Props> = ({ onClick, children ,color}) => {
    return (
        <Container className={`d-flex align-items-center justify-content-center ${color}`} onClick={onClick}>
            {children}
        </Container>
    );
}

export default CicleIconButton;
