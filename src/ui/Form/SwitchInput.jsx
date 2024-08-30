import { Switch } from "@mui/material";
import FormFieldContainer from "./FormFieldContainer";

function SwitchInput({ title, label, id, register, watchedValue }) {
  return (
    <FormFieldContainer title={title}>
      <label htmlFor={id} className="pl-2 text-sm font-medium text-blue-600">
        {label}
      </label>
      <Switch
        id={id}
        checked={watchedValue}
        sx={{
          "& .MuiSwitch-track": {
            backgroundColor: "#94a3b8",
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: "#bfdbfe",
          },
          "&:active .MuiSwitch-thumb, & .Mui-checked .MuiSwitch-thumb": {
            backgroundColor: "#2563eb",
          },
        }}
        {...register(id)}
      />
    </FormFieldContainer>
  );
}

export default SwitchInput;
