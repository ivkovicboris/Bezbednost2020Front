import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificateService } from 'src/app/services/certificate.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  public listOfData = [];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  onBack(): void {
    this.router.navigateByUrl("pages/admin-home");
  }

  // onDelete(id) {
  //   this.userService.deleteUser(id).subscribe(data => {
  //     console.log(id);
  //     alert('successfully deleted!');
  //   })
  // }

}
