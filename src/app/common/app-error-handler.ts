import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
    handleError(error) {
        alert('an unexpected error happened');
        console.log(error);
    }
}
