import { TextField } from '@mui/material';
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
> & {
  name: string;
  control: Control<any>;
  required?: boolean;
};

export function DatePicker({
  name,
  required,
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
                  required={!!required}
                  error={!!error}
                  helperText={error && error?.message}
                  onBlur={onBlur}
                />
              );
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
}
