import { useSelector } from 'react-redux';
import { useAttributePreference } from '../../../../../_metronic/helpers/common/util/preferences';


const sourceCustom = (urls) => ({
  type: 'raster',
  tiles: urls,
  tileSize: 256,
  maxzoom: 18,
});

const sourceOpenWeather = (style, key) => sourceCustom([
  `https://tile.openweathermap.org/map/${style}/{z}/{x}/{y}.png?appid=${key}`,
]);

export default () => {
  //const t = useTranslation();

  const openWeatherKey = useAttributePreference('openWeatherKey');
  const tomTomKey = useAttributePreference('tomTomKey');
  const hereKey = useAttributePreference('hereKey');
  const customMapOverlay ='';// useSelector((state:any) => state.session.server.overlayUrl);

  return [
    {
      id: 'openSeaMap',
      title: 'mapOpenSeaMap',
      source: sourceCustom(['https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png']),
      available: true,
    },
    {
      id: 'openWeatherClouds',
      title: 'mapOpenWeatherClouds',
      source: sourceOpenWeather('clouds_new', openWeatherKey),
      available: !!openWeatherKey,
      attribute: 'openWeatherKey',
    },
    {
      id: 'openWeatherPrecipitation',
      title: 'mapOpenWeatherPrecipitation',
      source: sourceOpenWeather('precipitation_new', openWeatherKey),
      available: !!openWeatherKey,
      attribute: 'openWeatherKey',
    },
    {
      id: 'openWeatherPressure',
      title: 'mapOpenWeatherPressure',
      source: sourceOpenWeather('pressure_new', openWeatherKey),
      available: !!openWeatherKey,
      attribute: 'openWeatherKey',
    },
    {
      id: 'openWeatherWind',
      title: 'mapOpenWeatherWind',
      source: sourceOpenWeather('wind_new', openWeatherKey),
      available: !!openWeatherKey,
      attribute: 'openWeatherKey',
    },
    {
      id: 'openWeatherTemperature',
      title: 'mapOpenWeatherTemperature',
      source: sourceOpenWeather('temp_new', openWeatherKey),
      available: !!openWeatherKey,
      attribute: 'openWeatherKey',
    },
    {
      id: 'tomTomFlow',
      title: 'mapTomTomFlow',
      source: sourceCustom([`https://api.tomtom.com/traffic/map/4/tile/flow/absolute/{z}/{x}/{y}.png?key=${tomTomKey}`]),
      available: !!tomTomKey,
      attribute: 'tomTomKey',
    },
    {
      id: 'tomTomIncidents',
      title: 'mapTomTomIncidents',
      source: sourceCustom([`https://api.tomtom.com/traffic/map/4/tile/incidents/s3/{z}/{x}/{y}.png?key=${tomTomKey}`]),
      available: !!tomTomKey,
      attribute: 'tomTomKey',
    },
    {
      id: 'hereFlow',
      title: 'mapHereFlow',
      source: sourceCustom(
        [1, 2, 3, 4].map((i) => `https://${i}.traffic.maps.ls.hereapi.com/maptile/2.1/flowtile/newest/normal.day/{z}/{x}/{y}/256/png8?apiKey=${hereKey}`),
      ),
      available: !!hereKey,
      attribute: 'hereKey',
    },
    {
      id: 'custom',
      title: 'mapOverlayCustom',
      source: sourceCustom(customMapOverlay),
      available: !!customMapOverlay,
    },
  ];
};
