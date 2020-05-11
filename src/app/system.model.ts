export class System {
    countryCode: string;
    systemName: string;
    location: string;
    systemID: string;
    discoveryUrl: string;

    public constructor(init?:Partial<System>) {
        Object.assign(this, init);
    }
}
