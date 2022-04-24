import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DatePicker as MuiDatePicker,
  DatePickerProps,
} from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import ptBR from 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { TextField } from '@mui/material';

type DatePickerType = Omit<
  DatePickerProps,
  'onChange' | 'value' | 'renderInput'
> &
  Pick<UseFormReturn, 'register' | 'setValue' | 'clearErrors'> & {
    name: string;
    errors: FieldValues;
  };

export function DatePicker(props: DatePickerType) {
  const [date, setDate] = useState<Date | null | unknown>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale={ptBR}>
      <MuiDatePicker
        value={date}
        onChange={(newDate: any) => {
          setDate(newDate);
          props.setValue(props.name, dayjs(newDate).format('DD/MM/YYYY'));
        }}
        onOpen={() => props.clearErrors('birthdate')}
        onAccept={() => props.clearErrors('birthdate')}
        openTo='year'
        views={['year', 'month', 'day']}
        disableFuture
        renderInput={params => (
          <TextField
            {...params}
            {...props.register(props.name)}
            error={props.errors[props.name] && true}
            helperText={
              props.errors[props.name] && props.errors[props.name].message
            }
          />
        )}
        {...props}
      />
    </LocalizationProvider>
  );
}
