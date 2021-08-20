import { DateTimePicker } from "@progress/kendo-react-dateinputs";

export default function DateTimePickerWithLocale() {
  return (
    <form className="k-form k-mb-8">
      <div className="k-my-4">
        <label className="k-form-field">
          Locale-based date and time picker
          <DateTimePicker />
        </label>
      </div>
      <div className="k-my-4">
        <label className="k-form-field">
          Long date and time
          <DateTimePicker format={"dd-MM-yyyy hh:mm:ss a"} />
        </label>
      </div>

      <div className="k-my-4">
        <label className="k-form-field">
          Custom format
          <DateTimePicker
            format={{
              year: "numeric",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }}
          />
        </label>
      </div>
    </form>
  );
}
