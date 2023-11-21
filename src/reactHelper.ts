import { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { errorsActions } from "./store";
import distance from "@turf/distance";
const accessToken =
  "pk.eyJ1IjoicmloYWEiLCJhIjoiY2pzZDBlNjNjMDVnNDQ5dGhoNW5teXExbiJ9.YUqVQBbawc44VFKVwaXw0w";
export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

/* eslint-disable */
export const useEffectAsync = (effect: any, deps: any) => {
  const dispatch = useDispatch();
  const ref = useRef();
  useEffect(() => {
    effect()
      .then((result: any) => (ref.current = result))
      .catch((error: any) => dispatch(errorsActions.push(error.message)));

    return () => {
      const result: any = ref.current;
      if (result) {
        result()
      }
    };
  }, [...deps, dispatch]);
};

export const useCatch = (method: any) => {
  const dispatch = useDispatch();
  return (...parameters: any) => {
    method(...parameters).catch((error: any) =>
      dispatch(errorsActions.push(error.message))
    );
  };
};

export const useCatchCallback = (method: any, deps: any) => {
  return useCallback(useCatch(method), deps);
};

export const checkCloser = (positions: any) => {

}
export const filterPositionsByRange = (
  positions: any,
  specificPosition: any,
  maxRangeKm: any
) => {
  const filteredPositions = positions.filter((position: any) => {
    // const R = 6371; // Radius of the Earth in kilometers
    // const dLat = toRadians(specificPosition.lat - position.lat);
    // const dLon = toRadians(specificPosition.lon - position.lon);
    // const a =
    //   Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //   Math.cos(toRadians(position.lat)) *
    //   Math.cos(toRadians(specificPosition.lat)) *
    //   Math.sin(dLon / 2) *
    //   Math.sin(dLon / 2);
    // const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // const distance = R * c;
    const distanceKm = distance(
      [specificPosition.lat, specificPosition.lon],
      [position.lat, position.lon]
    );
    return distanceKm <= maxRangeKm;
  });

  return filteredPositions;
};

export const sortByDistance = (array: any, lat: any, lon: any) => {

  // Calculate the distance between each object and the specific position
  const distances = array.map((object: any) => {
    const { lat: objectLat, lon: objectLon } = object;
    const distance = getDistanceByHaversineFormula(
      lat,
      lon,
      objectLat,
      objectLon
    );
    return {
      object,
      distance,
    };
  });

  // Sort the array by distance
  distances.sort((a: any, b: any) => a.distance - b.distance);


  // Return the sorted array of objects
  return distances.map((item: any) => item.distance);
};

export const isNearRegion = (lat1: any, lon1: any, lat2: any, lon2: any, radius: any) => {
  const R = 6371000; // radius of the earth in meters

  const latDiff = ((lat2 - lat1) * Math.PI) / 180; // difference in latitude
  const lonDiff = ((lon2 - lon1) * Math.PI) / 180; // difference in longitude

  const a =
    Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(lonDiff / 2) *
    Math.sin(lonDiff / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // distance between the two points in meters

  return distance <= radius; // check if the distance is within the given radius
};

export const getTimeToReachDestination = (
  currentLat: any,
  currentLon: any,
  goalLat: any,
  goalLon: any,
  currentSpeed: any
) => {
  // Calculate the distance between the current location and the goal location using the Haversine formula
  // const earthRadiusKm = 6371;
  // const dLat = ((goalLat - currentLat) * Math.PI) / 180;
  // const dLon = ((goalLon - currentLon) * Math.PI) / 180;
  // const lat1 = (currentLat * Math.PI) / 180;
  // const lat2 = (goalLat * Math.PI) / 180;
  // const a =
  //   Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //   Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  // const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  // const distanceKm = earthRadiusKm * c;
  const distanceKm = distance([currentLat, currentLon], [goalLat, goalLon]);

  // Calculate the estimated time to reach the goal location
  if (currentSpeed > 0) {
    const timeHours = distanceKm / currentSpeed;
    const timeMinutes = Math.round(timeHours * 60);

    // Format the time as "hh:mm"
    const hours = Math.floor(timeMinutes / 60);
    const minutes = timeMinutes % 60;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;

    // Return the formatted time
    return formattedTime;
  } else {
    return "00:00";
  }
};

export const getClosestCoordinate = (coordinates: any, currentPosition: any) => {
  //currentLat, currentLon
  let closestCoord = null;
  let closestDistance = Infinity;

  coordinates.forEach((coord: any) => {
    const lat = coord?.latitude;
    const lon = coord?.longitude;
    const distance = getDistanceByHaversineFormula(
      currentPosition?.latitude,
      currentPosition?.longitude,
      lat,
      lon
    );

    /* Math.sqrt(
      Math.pow(lat - currentPosition?.latitude, 2) +
        Math.pow(lon - currentPosition?.longitude, 2)
    );*/

    if (distance < closestDistance) {
      closestCoord = coord;
      closestDistance = distance;
    }
  });

  return closestCoord;
};

export const getDistanceByHaversineFormula = (
  currentLat: any,
  currentLon: any,
  goalLat: any,
  goalLon: any
) => {
  let distance1 = distance([currentLat, currentLon], [goalLat, goalLon]);
  // alert(distance1)
  const earthRadius = 6371; // Earth's radius in kilometers
  const latDiff = toRadians(goalLat - currentLat);
  const lonDiff = toRadians(goalLon - currentLon);
  const a =
    Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.cos(toRadians(currentLat)) *
    Math.cos(toRadians(goalLat)) *
    Math.sin(lonDiff / 2) *
    Math.sin(lonDiff / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance2 = earthRadius * c; // Distance in kilometers
  // alert(distance2)
  return distance2;

  // Define the two points
  // const point1 = turf.point([currentLat , currentLon]);
  // const point2 = turf.point([goalLon, currentLon]);

  // // Calculate the distance between the two points
  // const distance = turf.distance(point1, point2);
  alert(distance);
};
export const isWithinRadius = (
  currentLat: any,
  currentLon: any,
  goalLat: any,
  goalLon: any,
  radius: any
) => {
  // const earthRadius = 6371; // Earth's radius in kilometers
  // const latDiff = toRadians(goalLat - currentLat);
  // const lonDiff = toRadians(goalLon - currentLon);
  // const a =
  //   Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
  //   Math.cos(toRadians(currentLat)) *
  //   Math.cos(toRadians(goalLat)) *
  //   Math.sin(lonDiff / 2) *
  //   Math.sin(lonDiff / 2);
  // const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  // const distance = earthRadius * c; // Distance in kilometers
  const tempd = distance([currentLat, currentLon], [goalLat, goalLon]);
  return tempd;
};

const toRadians = (degrees: any) => {
  return degrees * (Math.PI / 180);
};

// export  const  distanceBetweenPoints=(lat1, lon1, lat2, lon2) =>{
//   const earthRadius = 6371; // Earth's radius in kilometers
//   const x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
//   const y = lat2 - lat1;
//   alert(y)
//   const distance = Math.sqrt(x * x + y * y) * earthRadius;
//   return distance;
// }

export const getDrivingDistance = async (start: any, end: any, apiKey: any) => {
  const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${"5b3ce3597851110001cf6248f8291517d1d44168899849213b4a324b"}&start=${start}&end=${end}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept:
          "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
      },
    });

    const data = await response.json();
    const distanceInMeters = data.features[0].properties.segments[0].distance;
    const distanceInKilometers = distanceInMeters; /// 1000;

    return distanceInKilometers; //.toFixed(2);
  } catch (error) {
    console.error("Error fetching driving directions:", error);
    return null;
  }
};








export const formatSeconds = (seconds: any) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toFixed(0).toString().padStart(2, '0')}`;
  return formattedTime;
}


export const findSmallestAttribute = (obj: any) => {
  let smallestAttr :any = null;
  let smallestValue = Infinity;

  for (const [attr, value] of Object.entries(obj)) {
    if (typeof value === 'number' && value < smallestValue) {
      smallestAttr = attr;
      smallestValue = value;
    }
  }

  return smallestAttr;
}


// export const getTimeDifferenceInSeconds = (time: any) => {
//   const currentTime: any = new Date();
//   const differenceInSeconds = Math.floor((currentTime - new Date(time)) / 1000);
//   return differenceInSeconds;
// }
// export const getTimeDifferenceInSeconds = (time) => {
//   const currentTime = new Date();
//   const differenceInSeconds = Math.floor((currentTime - new Date(time)) / 1000);
//   return differenceInSeconds;
// }
export function getTimeDifferenceInSeconds(targetTimeString: string): number {
  const targetTime = new Date(targetTimeString);
  const currentTime = new Date();
  const timeDiff = currentTime.getTime() -targetTime.getTime() ;
  return Math.floor(timeDiff / 1000);
}

export const calculateDuration = (distanceInMeters: any, speedInKmH: any) => {
  if (speedInKmH === 0) {
    return 0;
  }

  // convert km/h to m/s
  const speedInMS = speedInKmH / 3.6;

  // calculate duration in seconds
  const durationInSeconds = distanceInMeters / speedInMS;

  return durationInSeconds;
}



export function findKeyWithSmallestValue(obj: { [key: string]: number }): string | undefined {
  return Object.entries(obj).reduce((acc: string | undefined, [key, value]) => {
    if (acc === undefined || value < obj[acc]) {
      return key;
    } else {
      return acc;
    }
  }, undefined);
}


export function isObjectEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}


export function isDeviceWithinBounds(device, bounds) {
  const deviceCoordinates = [device.longitude, device.latitude];
  return bounds.contains(deviceCoordinates);
}