import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  margin: 5px 0;
`;

export const ProductImage = styled.img`
  width: 96px;
  height: 100%;
  border-radius: 8px 0 0 8px;
  background-size: cover;
  background-position: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  width: 100%;
`;

export const ProductName = styled.h3`
  font-weight: bold;
  color: #5cb646;
  margin-top: 30px;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.span`
  font-size: 12px;
  color: #b8b8b8;
  height: 30px;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.h3`
  font-weight: bold;
`;

export const Main = styled.div`
  display: flex;
`;
