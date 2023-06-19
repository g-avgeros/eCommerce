import { FormControl, ValidationErrors } from "@angular/forms";

export class ECommerceValidators {
    static notOnlyWhitespace(control: FormControl) : ValidationErrors {

        // chech if string only contains whitespace
        if ((control.value != null) && (control.value.trim().lenght === 0)) {

            //invalid, return error object
            return { 'notOnlyWhitespace': true}
        }
        else{
            // valid, return null
            return null;
        }
    }
}
