import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { resolve, reject } from 'q';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            };
        } else {
            return null;
        }
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) === 'john') {
                    resolve({ shouldBeUnique: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}

