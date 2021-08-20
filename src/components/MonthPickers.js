import { Calendar, DatePicker } from "@progress/kendo-react-dateinputs";

function CustomCalendar(props) {
  return (
    <Calendar
      bottomView="year"
      topView="year"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default function MonthPickers() {
  return (
    <>
      <h2>Month pickers</h2>
      <form className="k-form k-mb-8">
        <label className="k-form-field mb-4">
          MM/yyyy
          <DatePicker width="100%" format="MM/yyyy" calendar={CustomCalendar} />
        </label>
        <label className="k-form-field mb-4">
          yyyy/MM
          <DatePicker width="100%" format="yyyy/MM" calendar={CustomCalendar} />
        </label>
        <label className="k-form-field">
          Month Year
          <DatePicker
            width="100%"
            format={{
              year: "2-digit",
              month: "long",
            }}
            calendar={CustomCalendar}
          />
        </label>
      </form>
    </>
  );
}
