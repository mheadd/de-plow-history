# Delaware Snow Plow Data

A record of snow plow locations in the State of Delaware during [Winter Storm Jonas](http://www.weather.com/storms/winter/news/winter-storm-jonas-forecast-blizzard-warning-january-22). Data captured for all plows at a rate of once per minute during the following time period.

* Begin: Fri Jan 22 2016 16:06:21 GMT-0500 (EST)
* End: Mon Jan 25 2016 08:44:21 GMT-0500 (EST)

Note - data capture may not have been 100% complete, and there may be gaps in the timelines for some plows. Each set of coorindates is accompanied by a timestamp to allow for temporal analysis (see below).

## Data

* The ```data``` directory contains a file for each unique plow id. Each file contains a JSON array of objects with the coordiantes, heading and diretion of the plow at a specific point in time.  

```json
 {
    "hash": "-686612776",
    "asOf": 1453505308000,
    "id": 200917,
    "name": "2037",
    "color": "",
    "type": "",
    "heading": null,
    "direction": "Stationary",
    "lat": 39.433884,
    "lon": -75.709938
  }
```

The *asOf* field holds a time stamp for each set of captured coordinates.

* The ```scrape``` directory contains the raw file assembled during the data capture time period.
* The ```scripts``` directory contains data conversion scripts and other utilities.
