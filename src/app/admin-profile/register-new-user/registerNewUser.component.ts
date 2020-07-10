import {Component, OnInit} from '@angular/core';
import {
  faBuilding,
  faCity,
  faEnvelope,
  faIndustry,
  faLock,
  faMapMarkerAlt,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import {Agent} from '../../shared/model/agent';
import {Company} from '../../shared/model/company';
import {RegisterNewUserService} from './registerNewUser.service';
import {NotifierService} from 'angular-notifier';

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

  constructor(private registerNewUserService: RegisterNewUserService, private notifier: NotifierService) {
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
    this.notifier.notify('success', 'You registered a new company successfully');
    this.registerNewUserService.registerCompany(this.companyObj).subscribe();
  }

  onAgentSubmit() {
    this.notifier.notify('success', 'You registered a new agent successfully');
    this.registerNewUserService.registerAgent(this.agentObj).subscribe();

  }
}
