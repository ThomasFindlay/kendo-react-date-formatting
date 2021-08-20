import { DatePicker } from "@progress/kendo-react-dateinputs";

export default function DynamicLocaleDatePicker(props) {
  return (
    <>
      <form className="k-form k-mb-8">
        <div className="k-my-4">
          <label className="k-form-field">
            Locale-based date format
            <DatePicker />
          </label>
        </div>
      </form>
    </>
  );
}
