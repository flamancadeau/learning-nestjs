import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        const isHttpException = error instanceof HttpException;

        const statusCode = isHttpException
          ? error.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;

        const message = isHttpException
          ? error.message
          : 'Internal Server Error';

        console.error('Captured Error:', error);

        return throwError(
          () =>
            new HttpException(
              {
                statusCode,
                message,
                data: null,
                error: !isHttpException ? 'InternalServerError' : error.name,
              },
              statusCode,
            ),
        );
      }),
    );
  }
}
