import { FormGroup, ValidationErrors } from "@angular/forms";


export function PasswordMatchValidator(formGroup: FormGroup): null | ValidationErrors {
  const passwordField = formGroup.controls.password
  const confirmField = formGroup.controls.confirm
  console.log(passwordField)
  console.log(confirmField)

  // if(!passwordField || !confirmField) {
  //   return null
  // }

  // if(confirmField.errors && !confirmField.errors.passwordMatch) {
  //   return null
  // }

  // return passwordField.value !== confirmField.value ? {passwordMatch: true} : null  
  return {passwordMatch: true}
}