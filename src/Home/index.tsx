import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import { Col, Row ,Card} from 'antd';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';
import LanguagePage from '../components/LanguagePage';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(90deg, rgba(110, 218, 120, 1) 39%, rgba(255, 162, 0, 1) 74%);
  }
`;
const LanStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;
const CenteredRow = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top:-40px;
  align-items: center;
  height: 100vh;
`;
const CenteredCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const CardStyle = styled(Card)`
  width: 300px;
  border:20px;
`;
const LinkStyle = styled(Link)`
  color: black;
  
  &:hover {
    color: black; 
  }
`;

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
    <GlobalStyle/>
    <LanStyle>
      <LanguagePage/>
    </LanStyle>
    <CenteredRow>
        <CenteredCol span={5}>
           <CardStyle title={t("Test 1")} bordered={false}>
           <LinkStyle to="/layout">{t("Layout & Style")}</LinkStyle>
           </CardStyle>
        </CenteredCol>
        <CenteredCol span={5}>
           <CardStyle  title={t("Test 2")} bordered={false}>
           <LinkStyle to="/next-page">{t("Connect API")}</LinkStyle>
           </CardStyle>
        </CenteredCol>
        <CenteredCol  span={5}>
           <CardStyle  title={t("Test 3")} bordered={false}>
           <LinkStyle to="/next-page">{t("Form")}</LinkStyle>
           </CardStyle>
        </CenteredCol>
      </CenteredRow>

    </>
  )
}

export default HomePage
