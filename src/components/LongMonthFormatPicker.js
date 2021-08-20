import { DatePicker } from "@progress/kendo-react-dateinputs";

export default function LongMonthFormatPicker() {
  return (
    <>
      <h2>Long month format</h2>
      <form className="k-form k-mb-8">
        <div className="k-my-4">
          <label className="k-form-field">
            US Date Format
            <DatePicker
              format={{
                day: "numeric",
                year: "numeric",
                month: "long",
              }}
            />
          </label>
        </div>
      </form>
    </>
  );
}
