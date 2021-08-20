import { DatePicker } from "@progress/kendo-react-dateinputs";

export default function DatePickers() {
  return (
    <>
      <h2>React DatePicker</h2>
      <form className="k-form k-mb-8">
        <div className="k-my-4">
          <label className="k-form-field">
            US Date Format
            <DatePicker format="MM-dd-yyyy" />
          </label>
        </div>
        <div className="k-my-4">
          <legend>UK Date Format</legend>
          <DatePicker format="dd-MM-yyyy" />
        </div>
        <div className="k-my-4">
          <legend>Arabic Date Format</legend>
          <DatePicker format="dd-yyyy-M" />
        </div>
        <div className="k-my-4">
          <legend>Chinese Date Format</legend>
          <DatePicker format="yyyy-MM-dd" />
        </div>
      </form>
    </>
  );
}
