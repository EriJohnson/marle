import TextField, {
  BaseTextFieldProps,
  TextFieldProps,
} from '@mui/material/TextField';
import {
  DatePicker as MuiDatePicker,
  DatePickerProps,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ptBR from 'dayjs/locale/pt-br';
import { Control, Controller } from 'react-hook-form';
import { parseDateToISOString } from 'utils/parseDateToISOString';

export type DatePickerComponentProps = Omit<
  DatePickerProps,
  'value' | 'onChange' | 'renderInput'
> &
  TextFieldProps & {
    name: string;
    control: Control;
  };

export default function DatePicker({
  name,
  control,
  ...rest
}: DatePickerComponentProps): JSX.Element {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs} locale={ptBR}>
          <MuiDatePicker
            {...rest}
            value={value || ''}
            onChange={(date, selectionState) => {
              const parsedDate = parseDateToISOString(selectionState || date);
              onChange(parsedDate);
            }}
            renderInput={params => {
              return (
                <TextField
                  {...params}
                  error={!!error}
                  helperText={error && error?.message}
                  onBlur={onBlur}
                  required={rest.required}
                  type='tel'
                />
              );
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
}
