import { useState, useEffect } from "react";
import Select from "react-select";
import { DirectionTypes, FieldTypes, SortProps } from "./gallery";

export interface SelectOption {
  label: string;
  value: string;
}

export type ControlProps = {
  setSelectOption: (props: SortProps) => void;
}

const Controls = ({ setSelectOption }: ControlProps) => {
  const fieldOptions: SelectOption[] = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions: SelectOption[] = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const [fieldOptionValue, setFieldOptionValue] = useState<SelectOption | null>(null);
  const [directionOptionValue, setDirectionValue] = useState<SelectOption | null>(null);

  useEffect(() => {
    setSelectOption({ field: fieldOptionValue?.value as FieldTypes ?? null, direction: directionOptionValue?.value as DirectionTypes ?? null });
  }, [fieldOptionValue, directionOptionValue])

  const onFieldChange = (field) => {
    setFieldOptionValue(field);
  }

  const onDirectionChange = (direction) => {
    setDirectionValue(direction);
  }

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions}
          value={fieldOptionValue}
          inputId="sort-field"
          className="input"
          onChange={onFieldChange} />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          value={directionOptionValue}
          inputId="sort-direction"
          className="input"
          onChange={onDirectionChange}
        />
      </div>
    </div>
  );
};

export default Controls;
