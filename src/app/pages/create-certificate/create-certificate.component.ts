import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CertificateService } from 'src/app/services/certificate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.css']
})
export class CreateCertificateComponent implements OnInit {

  public rootForm: FormGroup;

  constructor(private fb: FormBuilder, private certificateService: CertificateService, private router: Router) {
    this.rootForm = this.createRootForm();
  }

  ngOnInit() {
  }

  private createRootForm(): FormGroup {
    return this.fb.group({
      'datumIzdavanja': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'datumIsteka': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'nazivOrganizacije': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'tip': ['ROOT']
    })
  }

  public submitRoot() {
    const payload = {
      ...this.rootForm.value,
      tip: 'ROOT'
    }
    this.certificateService.createCertificate(payload).subscribe(data => {
      this.router.navigateByUrl('pages/admin-home');
    })
  }

}


