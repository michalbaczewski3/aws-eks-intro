import { NTExceptionTypeEnum } from './n-t-exception-type-enum';

export const nTStatusMap = new Map<NTExceptionTypeEnum, number>([
  [NTExceptionTypeEnum.UnexpectedApiException, 500],
  [NTExceptionTypeEnum.EntityNotFoundException, 404],
  [NTExceptionTypeEnum.EntityAlreadyExistsException, 409],
  [NTExceptionTypeEnum.ValidationException, 400],
  [NTExceptionTypeEnum.IllegalArgumentException, 400],
  [NTExceptionTypeEnum.UnauthorizedException, 401],
  [NTExceptionTypeEnum.AccessDeniedException, 403],
  [NTExceptionTypeEnum.NotFoundException, 404],
  [NTExceptionTypeEnum.BadRequestException, 400],
  [NTExceptionTypeEnum.ErrorInternalException, 500],
  [NTExceptionTypeEnum.ServiceNotAvailableException, 503],
  [NTExceptionTypeEnum.RequestTimeoutException, 408],
])
