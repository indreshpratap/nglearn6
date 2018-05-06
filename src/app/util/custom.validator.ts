import { FormControl } from "@angular/forms";

export class CustomValidator {
  static mobile(control: FormControl) {
    if (control.value) {
      if (/^\d{10}$/.test(control.value)) {
        return null; // no error
      } else {
          // custom error 'mobile' as key to identity this error
        return { mobile: true }; 
      }
    } else {
      return null;
    }
  }
}
