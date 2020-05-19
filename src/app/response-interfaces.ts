import { Time } from '@angular/common';

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
    is_renting: number;
    is_returning: number;
    num_docks_available: number;
    num_bikes_available: number;
    last_reported: Time;
}