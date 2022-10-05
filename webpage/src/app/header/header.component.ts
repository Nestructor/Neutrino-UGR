import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario!: firebase.default.User

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit(): void {

  }

  logout() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    this.afAuth.signOut()
    .then((success) => {
      Toast.fire({
        icon: 'success',
        title: 'La sesión se ha cerrado correctamente'
      })
    })

    setTimeout(() => { 
      this.router.navigate(['/login'])
    }, 1000);
  }

}