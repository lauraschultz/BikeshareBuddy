export class UserData {
    systems: UserSystem[];

    public constructor(init?:Partial<UserData>) {
        Object.assign(this, init);
    }
}

export class UserSystem {
    systemID: string;
    stations: UserStation[];
}

export class UserStation {
    stationID;
}

export class StationDockInfo {
    full: number;
    extraFull: number;
    empty: number;
    extraEmpty: number;
  
      public constructor(init?:Partial<StationDockInfo>) {
        Object.assign(this, init);
    }
  }