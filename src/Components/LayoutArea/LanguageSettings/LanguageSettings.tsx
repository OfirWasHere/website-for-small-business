import { useState } from "react";
import "./LanguageSettings.css";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import LanguageModel from "../../Models/LanguageModel";
import { useTranslation, } from "react-i18next";
import i18next from "i18next";

interface LanguageProps {
  languageList: LanguageModel[];
}

function LanguageSettings(props: LanguageProps) {

  const [lang, setLang] = useState(i18next.language);

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
    i18next.changeLanguage(event.target.value as string)
  };

  return (
    <div className="LanguageSettings">
      <FormControl>
        <Select value={lang} label="lang" onChange={handleChange}>
          {props.languageList.map((e, index) => (
            <MenuItem value={e.value} key={index}>{e.lang}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default LanguageSettings;