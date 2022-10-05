import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin!: FormGroup
  datosCorrectos: boolean = true
  textoError: String = ''
  mantener_email_input: String = ''

  constructor(
    public creadorFormulario: FormBuilder, 
    public afAuth: AngularFireAuth,
    private spinner: NgxSpinnerService,
    public router: Router, 
    ) {}

  ngOnInit() {
    this.formularioLogin = this.creadorFormulario.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required]
    });
  }

  ingresar() {
    if(this.formularioLogin.valid) {
      this.datosCorrectos = true
      this.spinner.show()
      this.afAuth.signInWithEmailAndPassword(this.formularioLogin.value.email, this.formularioLogin.value.password)
      .then((usuario) => { 
        setTimeout(() => { 
          this.spinner.hide() 
        }, 3000);
        this.router.navigate(['/componente']) 
      }).catch((error) => {
        this.ngOnInit()
        this.datosCorrectos = false
        this.textoError = 'El nombre de usuario/a o contraseña es incorrecto.'
        this.spinner.hide() 
      })
    } else {
      this.ngOnInit()
      this.datosCorrectos = false
      this.textoError = 'El nombre de usuario/a o contraseña es incorrecto.'
      this.spinner.hide() 
    }
  }

}
