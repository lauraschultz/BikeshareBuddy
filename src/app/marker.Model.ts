export class Marker {
    name: string;
    marker: google.maps.Marker

    constructor(n: string, m: google.maps.Marker){
        this.name = n;
        this.marker = m;
    }
}
