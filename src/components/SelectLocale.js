import { useState } from "react";

const locales = ["en-US", "en-GB", "ar-DZ", "zh-Hans"];

const getDefaultLocale = () => {
  return navigator.languages?.[0] || locales[0];
};

export default function SelectLocale(props) {
  const [locale, setLocale] = useState(getDefaultLocale());
  return (
    <>
      <form className="k-form">
        <label>
          Pick locale:
          <select
            style={{ width: 150, marginLeft: 10, height: 40, padding: 5 }}
            value={locale}
            onChange={e => {
              setLocale(e.target.value);
            }}
          >
            {locales.map((option, key) => (
              <option key={key} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </form>
      {props.children({ locale })}
    </>
  );
}
