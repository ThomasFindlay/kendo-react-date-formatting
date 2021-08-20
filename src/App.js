import "@progress/kendo-theme-material/dist/all.css";
import "./App.css";
import DatePickers from "./components/DatePickers";
import LongMonthFormatPicker from "./components/LongMonthFormatPicker";
import MonthPickers from "./components/MonthPickers";
import SelectLocale from "./components/SelectLocale";
import { IntlProvider, load } from "@progress/kendo-react-intl";
import DynamicLocaleDatePicker from "./components/DynamicLocaleDatePicker";
import DateTimePickerWithLocale from "./components/DateTimePickerWithLocale";

import weekData from "cldr-core/supplemental/weekData.json";
import usCaGregorian from "cldr-dates-full/main/en/ca-gregorian.json";
import usDateFields from "cldr-dates-full/main/en/dateFields.json";
import gbCaGregorian from "cldr-dates-full/main/en-GB/ca-gregorian.json";
import gbDateFields from "cldr-dates-full/main/en-GB/dateFields.json";
import zhCaGregorian from "cldr-dates-full/main/zh-Hans/ca-gregorian.json";
import zhDateFields from "cldr-dates-full/main/zh-Hans/dateFields.json";
import arCaGregorian from "cldr-dates-full/main/ar-DZ/ca-gregorian.json";
import arDateFields from "cldr-dates-full/main/ar-DZ/dateFields.json";

load(
  weekData,
  usCaGregorian,
  usDateFields,
  gbCaGregorian,
  gbDateFields,
  zhCaGregorian,
  zhDateFields,
  arCaGregorian,
  arDateFields
);

function App() {
  return (
    <div className="App">
      <h1>Date formats examples using DatePicker</h1>
      <DatePickers />
      <LongMonthFormatPicker />
      <MonthPickers />
      <h2>Locale-based DatePicker</h2>
      <SelectLocale>
        {({ locale }) => (
          <IntlProvider locale={locale}>
            <DynamicLocaleDatePicker />
            <h2>DateTimePicker</h2>
            <DateTimePickerWithLocale />
          </IntlProvider>
        )}
      </SelectLocale>
    </div>
  );
}

export default App;
