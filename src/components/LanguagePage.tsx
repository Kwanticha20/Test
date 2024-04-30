import React , {useState} from 'react'
import styled from 'styled-components';
import { Menu, Dropdown,Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import i18n from '../locales/i18n';
import { useTranslation } from 'react-i18next';

const ButtonStyle = styled(Button)`
  margin-top: 5px;
`;

function LanguagePage() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>(i18n.language);
  
  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng === 'en' ? 'En' : 'ไทย');
  };
  
  const menu = (
    <Menu>
      <Menu.Item key="en" onClick={() => handleChangeLanguage("en")}>{t("EN")}</Menu.Item>
      <Menu.Item key="th" onClick={() => handleChangeLanguage("th")}>{t("TH")}</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} placement="bottomLeft">
        <ButtonStyle onClick={e => e.preventDefault()}>
          {selectedLanguage}<DownOutlined />
        </ButtonStyle>
      </Dropdown>
    </>
  )
}

export default LanguagePage
