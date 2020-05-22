import { Injectable } from '@angular/core';
import Portis from '@portis/web3';
import { environment } from '../../environments/environment';
import { SubjectService } from './subject.service';

@Injectable()
export class PortisService extends SubjectService {

    private portis = new Portis(environment.portis.appId, this.getNetworkName(environment.network));
    userAddress: string;

    constructor(
    ) {
        super();

        this.portis.onLogin((walletAddress, email) => {
            console.log(`onLogin: ${walletAddress} | ${email}`);
            this.dispatchEvent({ type: 'wallet', data: walletAddress });
            this.dispatchEvent({ type: 'provider', data: this.portis.provider });
        });

        this.portis.onLogout(() => {
            console.log(`onLogout:`);
            this.dispatchEvent({ type: 'wallet', data: null });
        });
    }

    private getNetworkName(networkId) {
        switch (networkId) {
            case 1:
                return 'mainnet';
            case 3:
                return 'ropsten';
            case 4:
                return 'rinkeby';
            case 42:
                return 'kovan';
        }
    }

    public show() {
        this.portis.showPortis();
    }

    public logout() {
    
        this.portis.logout();
    }

    public async isLoggedIn() {
        return await this.portis.isLoggedIn();
    }
}