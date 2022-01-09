import { NTException, nTExceptionGroupName, NTExceptionTypeEnum } from '../model';
import { getPwnException } from './exception-service';

export function getAndLogExcBody(err: any): NTException {
  try {
    let excBody: NTException;
    if (err?.error?.group && err.error.group === nTExceptionGroupName) {
      console.log('[' + new Date().toISOString() + ']: Exception:');
      console.log(err);
      excBody = err;
    } else if (err?.response?.data?.error?.group && err.response.data.error.group === nTExceptionGroupName) {
      console.log('[' + new Date().toISOString() + ']: Exception:');
      console.log(err.response.data);
      excBody = err.response.data;
    } else if (err?.response?.data) {
      console.log('[' + new Date().toISOString() + ']: Error:');
      console.log(err.response.data);
      console.log(err);
      excBody = getPwnException(NTExceptionTypeEnum.UnexpectedApiException, err.response.data);
    } else {
      console.log('[' + new Date().toISOString() + ']: Error:');
      console.log(err);
      excBody = getPwnException(NTExceptionTypeEnum.UnexpectedApiException, err);
    }
    return excBody;
  } catch (e) {
    const message = 'getAndLogExcBody() failed! This should never happened!';
    console.log('[' + new Date().toISOString() + '] ' + message);
    return getPwnException(NTExceptionTypeEnum.UnexpectedApiException, message);
  }
}
