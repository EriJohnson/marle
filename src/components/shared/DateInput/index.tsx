import TextField, { TextFieldProps } from '@mui/material/TextField';
import { forwardRef, RefCallback } from 'react';
import { ChangeHandler, Control, Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

type DateInputProps = TextFieldProps & {
  name: string;
  control: Control;
};

interface CustomProps {
  onChange: ChangeHandler;
  name: string;
}

const DateMaskInput = forwardRef<HTMLElement, CustomProps>((props, ref) => {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="00/00/0000"
      inputRef={ref as RefCallback<HTMLInputElement>}
      onAccept={(value: unknown) =>
        onChange({ target: { name: props.name, value } })
      }
      overwrite
    />
  );
});

export default function DateInput({
  name,
  control,
  ...rest
}: DateInputProps): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...rest}
          {...field}
          onChange={({ target: { value } }) => {
            field.onChange(value);
          }}
          error={!!error}
          helperText={error && error?.message}
          InputProps={{ inputComponent: DateMaskInput as any }}
          type="tel"
        />
      )}
    />
  );
}
