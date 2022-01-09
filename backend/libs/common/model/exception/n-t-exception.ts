import { NTExceptionTypeEnum } from './n-t-exception-type-enum';

export interface NTException {
  error: {
    group: string
    type: NTExceptionTypeEnum
    reason?: string
  },
  status: number,
}
