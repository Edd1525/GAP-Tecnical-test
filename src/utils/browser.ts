import { ClientFunction } from 'testcafe';

export class Browser {
    private t: any;

    constructor(t: any) {
        this.t = t;
    }

    async getCurrentURL() {
        await this.t.wait(5000);
        const getPageUrl = ClientFunction(() => window.location.href).with({ boundTestRun: this.t });
        return getPageUrl();
    }

    async getMediaIdFromURL() {
        const currentURL: any[] = (await this.getCurrentURL()).split('/');
        return currentURL[currentURL.length - 1];
    }

    async getSessionStorageItem(item: string) {
        const getSessionStorage = ClientFunction(key => sessionStorage.getItem(key)).with({ boundTestRun: this.t });
        return getSessionStorage(item);
    }
}
