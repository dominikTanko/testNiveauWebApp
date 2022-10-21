import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  loginButtonText!: string;
  alreadyLoggedIn!: boolean;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loginButtonText = 'Se connecter';
    this.alreadyLoggedIn = false;
  }

  onLogin() {
    if (!this.alreadyLoggedIn) {
      this.loginButtonText = "Se déconnecter";
      this.alreadyLoggedIn = true;
    } else {
      this.loginButtonText = 'Se connecter';
      this.alreadyLoggedIn = false;
    }
  }

  openLoginForm() {
    const modalRef = this.modalService.open(LoginComponent);
  }

}
