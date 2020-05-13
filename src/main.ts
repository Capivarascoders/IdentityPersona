import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Portis from '@portis/web3';
import Web3 from 'web3';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const portis = new Portis('3971b854-88d9-4e2e-999c-7b4ce69a2c71', 'rinkeby');
const web3 = new Web3(portis.provider);
web3.eth
    .getAccounts()
    .then(accounts => console.log(accounts))
    .catch(error => console.log(error));

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
