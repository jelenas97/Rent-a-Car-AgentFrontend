import {Component, OnInit} from '@angular/core';
import {
  faBuilding,
  faCity, faEnvelope,
  faIndustry,
  faLock,
  faMapMarkerAlt,
  faUser,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {Agent} from '../../shared/model/agent';
import {Company} from '../../shared/model/company';
import {RegisterNewUserService} from './registerNewUser.service';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './registerNewUser.component.html',
  styleUrls: ['./registerNewUser.component.css']
})
export class RegisterNewUserComponent implements OnInit {
  faUser = faUser;
  faPassword = faLock;
  faCompany = faBuilding;
  faAddress = faMapMarkerAlt;
  faCity = faCity;
  faInd = faIndustry;
  faEmail = faEnvelope;
  agent: boolean;
  company: boolean;

  agentObj: Agent;
  companyObj: Company;

  constructor(private registerNewUserService: RegisterNewUserService) {
    this.agentObj = new Agent();
    this.companyObj = new Company();
  }

  companyForm() {
    this.agent = false;
    this.company = true;
  }

  agentForm() {
    this.agent = true;
    this.company = false;
  }

  ngOnInit(): void {
    this.company = true;
  }

  onCompanySubmit() {
    this.registerNewUserService.registerCompany(this.companyObj).subscribe();
  }

  onAgentSubmit() {
    this.registerNewUserService.registerAgent(this.agentObj).subscribe();
  }
}
