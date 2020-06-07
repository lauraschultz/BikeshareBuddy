# BikeshareBuddy

BikeshareBuddy is a web app that allows users to save and easily view their favorite bikeshare stations to find out if there are available bikes and/or docks. Users can search for a bikeshare system to see a map of all stations within the system. Click a station icon to see real-time information about the station. To save a station to your favorites, you must be logged in. 

The search results are pulled directly from [the GBFS database](https://github.com/NABSA/gbfs/blob/master/systems.csv). If you see a system that doesn't exist anymore, or if you can't find a system that does exist, it is because the CSV has not been updated.

## Known issues:
- Many stations listed in the search results can not be viewed with BikeshareBuddy. If you click on an unavailable station, you will see an error message an be redirected. In most cases, this happens because the station requires an API key to view data.

## Future enhancements:
- Switch API to CityBikes or similar