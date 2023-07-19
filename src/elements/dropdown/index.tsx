import { Label, Option, Select } from "./dropdown.styles";
import { map } from "lodash";

type OptionType = {
  value: string;
  label: string;
};

type DropdownProps = {
  label?: string;
  options: OptionType[];
};

const Dropdown = ({ label, options = [] }: DropdownProps) => {
  return (
    <>
      {label && <Label htmlFor={"dropdown"}>{label}</Label>}
      <Select id={"dropdown"}>
        {map(options, (eachOption: OptionType) => {
          const { label, value } = eachOption;
          return <Option value={value}>{label}</Option>;
        })}
      </Select>
    </>
  );
};

export default Dropdown;
