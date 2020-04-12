import { Component, OnInit, ɵConsole } from '@angular/core';
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
  public personForm: FormGroup;
  public organizationForm: FormGroup;

  constructor(private fb: FormBuilder, private certificateService: CertificateService, private router: Router) {
    this.rootForm = this.createRootForm();
    this.personForm = this.createPersonForm();
    this.organizationForm = this.createOrganizationForm();
  }

  ngOnInit() {
  }

  private createRootForm(): FormGroup {
    return this.fb.group({
      'datumIzdavanja': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'datumIsteka': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'nazivOrganizacije': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
  }

  private createPersonForm(): FormGroup {
    return this.fb.group({
      'datumIzdavanja': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'datumIsteka': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'nazivOrganizacije': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'nadSertifikatId': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'ime': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'prezime': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'drzava': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
  }

  private createOrganizationForm(): FormGroup {
    return this.fb.group({
      'datumIzdavanja': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'datumIsteka': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'nazivOrganizacije': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'nadSertifikatId': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'ptt': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'adresa': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'drzava': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
  }

  public submitRoot() {
    const payload = {
      ...this.rootForm.value,
      tip: 'ROOT'
    }
    console.log(payload);
    this.certificateService.createCertificate(payload).subscribe(data => {
      this.router.navigateByUrl('pages/admin-home');
      alert('successfully created');
    })
  }

  public submitPerson() {
    const payload = {
      ...this.personForm.value,
      tip: 'PERSON'
    }
    console.log(payload);
    this.certificateService.createCertificate(payload).subscribe(data => {
      this.router.navigateByUrl('pages/admin-home');
      alert('successfully created');
    })
  }

  public submitOrganization() {
    const payload = {
      ...this.organizationForm.value,
      tip: 'ORGANIZATION'
    }
    console.log(payload);
    this.certificateService.createCertificate(payload).subscribe(data => {
      this.router.navigateByUrl('pages/admin-home');
      alert('successfully created');
    })
  }

}


