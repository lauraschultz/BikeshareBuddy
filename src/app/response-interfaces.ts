export interface Feed {
    name: string;
    url: string;
}

export interface StationInfo {
    name: string;
    lon: number;
    lat: number;
    station_id: string;
}

export interface StationStatus {
    station_id: string;
    is_renting: boolean;
    is_returning: boolean;
    num_docks_available: number;
    num_bikes_available: number;
    last_reported: Date;
}