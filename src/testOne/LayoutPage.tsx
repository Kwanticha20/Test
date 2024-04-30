import React from 'react';
import LanguagePage from '../components/LanguagePage';
import { useTranslation } from 'react-i18next';
import styled , {createGlobalStyle} from 'styled-components';
import { Link } from 'react-router-dom';
import {Col , Row } from 'antd';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(90deg, #8fef99 39%, rgba(255, 162, 0, 1) 74%);
    font-family: 'Arial', sans-serif;
  }
`;
const LanStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;
const LinkStyle = styled(Link)`
  color: black;
  text-decoration:none;
  font-weight: bold;
  font-size:40px;
  
  &:hover {
    color: black; 
  }
`;
const RowStyle = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top:-180px;
  align-items: center;
  height: 100vh;
`;
const ColStyle = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:15px;
  width:350px;
  height: 150px;
  border:5px;
 &:hover {
  background-color:#ffa200 ;
  }
 &:active {
    background-color: #6edc78; 
  }
`;
const WrapperText = styled.div`
  margin-top: 150px;
  width: 100px;
  border-radius: 20px;
  background-color: #6eda78 ;
  margin-left:-80px;
`;
const WrapperIcon = styled.div`
  display:grid;
 grid-template-columns: 1fr 1fr ;
  margin-right:820px;
  gap:40px;
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 86.6px solid gray; 
  transform: rotate(-90deg);
`;
const TriangleUp = styled.div`
  width: 0;
  height: 0;
  margin-left:-30px;
  margin-top: 15px;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 86.6px solid gray; 
  transform: rotate(0deg);
`;
const TriangleDown = styled.div`
  width: 0;
  height: 0;
  margin-left:-10px;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 86.6px solid gray; 
  transform: rotate(60deg);
`;
const WrapperTexts = styled.div`
  margin-top: 150px;
  width: 100px;
  border-radius: 20px;
  background-color: #6eda78 ;
  margin-left:-980px;
`;
const Triangles = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 86.6px solid gray; 
  transform: rotate(90deg);
`;
const WrapperHr= styled.hr`
  border: none;
  border-top: 0.5px solid gray; 
  margin-top:-275px;
  width:880px;  
`;
const ButtonLayoutStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:10px;
  width:200px;
  height: 150px;
  margin-top:-180px;
  border:5px;
  
 &:hover {
  background-color:#ffa200 ;
  }
`;
const Wrappersquare = styled.div`
  width: 80px;
  height: 80px;
  background-color:gray;
`;
const Wrappercircle = styled.hr`
  width: 80px;
  height: 80px;
  border-radius:50px;
  background-color:gray;
`;
const Wrapperellipse = styled.hr`
  width: 80px;
  height: 140px;
  border-radius: 50%;
  transform: rotate(90deg);
  background-color:gray;
`;
const ButtonLayoutStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:10px;
  width:300px;
  height: 150px;
  margin-top:-950px;
  border:5px;
  
 &:hover {
  background-color:#ffa200 ;
  }
`;
const Wrappertrapezoid = styled.div`
  width: 150px; 
  height: 100px; 
  background-color:gray;
  transform: perspective(210px) rotateX(30deg); 
  margin: 50px; 
`;
const WrappersquareSurface = styled.div`
  width: 200px;
  height: 80px;
  background-color:gray;
`;
const Wrapperparallelogram = styled.div`
  width: 150px;
  height: 80px;
  background-color:gray;
  transform: skew(20deg);
`;
function LayoutPage() {
  const { t } = useTranslation();
  return (
    <>
      <GlobalStyle/>
       <LanStyle>
         <LinkStyle to="/">{t("Layout & Style")}</LinkStyle>
         <LanguagePage/>
       </LanStyle>
        <>
      <RowStyle>
        <ColStyle span={4}>
          <ButtonStyle>
            <Triangle/>
            <WrapperText>{t("Move shape")}</WrapperText>
          </ButtonStyle>
        </ColStyle>
        <ColStyle span={6}>
          <ButtonStyle>
            <WrapperIcon> <TriangleUp/><TriangleDown/></WrapperIcon>
           <WrapperTexts>{t("Move position")}</WrapperTexts>
          </ButtonStyle>
        </ColStyle>
        <ColStyle span={4}>
          <ButtonStyle>
            <Triangles/>
            <WrapperText>{t("Move shape")}</WrapperText>
          </ButtonStyle>
        </ColStyle>
      </RowStyle>
      <WrapperHr/>
      <RowStyle>
      <ColStyle span={3}>
          <ButtonLayoutStyle>
            <Wrappersquare/>
          </ButtonLayoutStyle>
        </ColStyle>
        <ColStyle span={4}>
          <ButtonLayoutStyle>
            <Wrappercircle/>
          </ButtonLayoutStyle>
        </ColStyle>
        <ColStyle span={3}>
          <ButtonLayoutStyle>
            <Wrapperellipse/>
          </ButtonLayoutStyle>
        </ColStyle>
      </RowStyle>
      <RowStyle>
      <ColStyle span={4}>
          <ButtonLayoutStyles>
            <Wrappertrapezoid/>
          </ButtonLayoutStyles>
        </ColStyle>
        <ColStyle span={5}>
          <ButtonLayoutStyles>
            <WrappersquareSurface/>
          </ButtonLayoutStyles>
        </ColStyle>
        <ColStyle span={4}>
          <ButtonLayoutStyles>
            <Wrapperparallelogram/>
          </ButtonLayoutStyles>
        </ColStyle>
      </RowStyle>
        </>
    </>
  )
}

export default LayoutPage
