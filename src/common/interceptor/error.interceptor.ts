/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  Catch,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
@Catch(HttpException)
export class ErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = context.switchToHttp().getResponse();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const statusCode = error?.getStatus() || 500;

        return throwError(() => ({
          statusCode,
          message: error.message || 'Internal Server Error',
          data: null,
        }));
      }),
    );
  }
}
