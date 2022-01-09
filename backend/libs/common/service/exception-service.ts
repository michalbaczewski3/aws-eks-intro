import { NTException, nTExceptionGroupName, NTExceptionTypeEnum, nTStatusMap } from '../model/exception';

export function getPwnException(exceptionType: NTExceptionTypeEnum, message?: string): NTException {
  return {
    error: {
      group: nTExceptionGroupName,
      type: exceptionType,
      reason: message,
    },
    status: nTStatusMap.get(exceptionType) || 500
  };
}
