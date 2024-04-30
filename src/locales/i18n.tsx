import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en : {
    translation: {
      "Test 1":" Test 1",
      "Test 2":" Test 2",
      "Test 3":" Test 3",
      "Layout & Style":"Layout & Style",
      "Connect API":"Connect API",
      "Form ":"Form",
      "TH ":"TH",
      "EN" : "EN",
      "Move shape" : "Move shape",
      "Move position" : "Move position",



    }
  },
  th : {
    translation:{
      "Test 1":"แบบทดสอบที่ 1",
      "Test 2":"แบบทดสอบที่ 2",
      "Test 3":"แบบทดสอบที่ 3",
      "Layout & Style":"การจัดการหน้าเว็บ",
      "Connect API":"การเชื่อม API",
      "Form":"การจัดการหน้าฟอร์ม",
      "TH":"ไทย",
      "EN":"อังกฤษ",
      "Move shape" : "เลื่อนรูปแบบ",
      "Move position" : "เปลี่ยนตำแหน่ง"
      
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"en",
    interpolation:{
      escapeValue:false
    }
  });

  export default i18n;