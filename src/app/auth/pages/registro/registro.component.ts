import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  public miFormulario: FormGroup = this._fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this._vs.nombreApellidoPatter),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this._vs.emailPattern)],
        [this._evs],
      ],
      username: ['', [Validators.required, this._vs.noPuedeSerShapdoo]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [this._vs.camposIguales('password', 'confirmPassword')],
    }
  );

  public emailErrorMsg: string = ""

  constructor(
    private _fb: FormBuilder,
    private _vs: ValidatorService,
    private _evs: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Piero davila',
      email: 'ejemplo@ejemplo.com',
      username: 'username01',
      password: '123456',
      confirmPassword: '123456',
    });
  }

  guardar() {
    console.log(this.miFormulario.value);
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  get emailErrorMessage(){
    const errors = this.miFormulario.get('email')?.errors

    if(errors?.['required']){
      return 'campo requerido'
    }

    if(errors?.['pattern']){
      return 'formato invalido'
    }

    if(errors?.['emailTomado']){
      return 'el email ya ha sido tomado'
    }

    return ''
  }

}
