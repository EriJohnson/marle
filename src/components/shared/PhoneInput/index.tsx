import TextField, { TextFieldProps } from '@mui/material/TextField';
import { forwardRef, RefCallback } from 'react';
import { Control, Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

type PhoneInputProps = TextFieldProps & {
  name: string;
  control: Control;
};

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export function getPhoneRawValue(phone: string) {
  return phone.replace(/\D+/g, '');
}

const PhoneMaskInput = forwardRef<HTMLElement, CustomProps>(
  function PhoneMaskInput(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask='(#0) 00000-0000'
        definitions={{ '#': /[1-9]/ }}
        inputRef={ref as RefCallback<HTMLInputElement>}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export default function PhoneInput({
  name,
  control,
  ...rest
}: PhoneInputProps): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...rest}
          {...field}
          onChange={({ target: { value } }) => {
            field.onChange(getPhoneRawValue(value));
          }}
          error={!!error}
          helperText={error && error?.message}
          InputProps={{ inputComponent: PhoneMaskInput as any }}
        />
      )}
    />
  );
}
