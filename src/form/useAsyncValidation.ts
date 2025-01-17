import {
  FieldValues,
  Path,
  UseFormGetFieldState,
  UseFormWatch,
} from 'react-hook-form';

import {useValidationQuery} from './useValidationQuery';

interface Props<FormSchema extends FieldValues> {
  fieldName: Path<FormSchema>;
  watch: UseFormWatch<FormSchema>;
  getFieldState: UseFormGetFieldState<FormSchema>;
  isAvailableFunc: (value: string) => Promise<boolean>;
  errorMessage?: string;
}

type ReturnValues = {
  errorMessage: string | undefined;
  notReady: boolean;
  isFetching: boolean;
  isInvalid: boolean;
};

export function useAsyncValidation<FormSchema extends FieldValues>({
  watch,
  getFieldState,
  fieldName,
  isAvailableFunc,
  errorMessage = 'indisponível',
}: Props<FormSchema>): ReturnValues {
  const field = watch(fieldName);
  const fieldState = getFieldState(fieldName);
  const fieldIsValid = !fieldState.invalid && fieldState.isDirty;
  const fieldQuery = useValidationQuery({
    value: field,
    enabled: fieldIsValid,
    isAvailableFunc,
    fieldName,
  });

  return {
    errorMessage: fieldQuery.isUnavailable ? errorMessage : undefined,
    notReady: fieldQuery.isFetching || fieldQuery.isUnavailable,
    isFetching: fieldQuery.isFetching,
    isInvalid: fieldQuery.isUnavailable || !fieldIsValid,
  };
}
