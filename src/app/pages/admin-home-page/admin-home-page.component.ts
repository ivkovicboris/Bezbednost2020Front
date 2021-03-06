import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificateService } from 'src/app/services/certificate.service';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  public listOfData = [];

  constructor(private router: Router, private certificateService: CertificateService) { }

  ngOnInit() {
    this.certificateService.getAllCertificates().subscribe(data => {
      console.log(data);
      this.listOfData = data;
    })
  }

  onCreateCertificate() {
    this.router.navigateByUrl('pages/create-certificate');
  }

  onListOfUsers() {
    this.router.navigateByUrl('pages/list-of-users');
  }

  formatDate(date): string {
    return moment(date).format('LLL');
  }

  onRevoke(id) {
    const body = {};
    this.certificateService.revokeCertificate(body, id).subscribe(data => {
      console.log(id);
      alert('successfully revoked');
    })
  }
}
