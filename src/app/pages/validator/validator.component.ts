import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';
import { PortisService } from 'src/app/services/portis.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {

  contractIsCreated: boolean = false;
  validator: any;
  userAddress: string;
  total: number;

  constructor(
    private portisService: PortisService,
    private contractService: ContractService
  ) {
    this.portisService.onEvent.pipe(filter(item => item.type === 'wallet')).subscribe((wallet) => {
      console.log(`validator: ${wallet.type} | ${wallet.data}`);
      this.userAddress = wallet.data;
    })
  }

  ngOnInit(): void {
  }

  instanciateContract() {
    this.contractService.instanciateContract();
    this.contractIsCreated = true;
  }

  async getByAddress() {
    console.log('get');
    this.validator = await this.contractService.getValidatorByAddress(
      this.userAddress
    );

    console.log(this.validator);
    console.log(this.validator.validatorId.toNumber());
  }

  async add() {
    console.log('add');
    await this.contractService.addValidator()
  }

  async getTotalValidators() {
    console.log('getTotalValidators');
    this.total = await this.contractService.getTotalValidators();
  }

}
