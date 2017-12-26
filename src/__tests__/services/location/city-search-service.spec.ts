import { CitySearchService } from '../../../index'
import * as Expo from 'expo'

it('[current-city-search : 01] should get a valid city name', async () => {
  // given
  const service = new CitySearchService();
  Expo.Permissions.askAsync = jest.fn().mockReturnValue({ status: 'granted' });
  Expo.Location.getCurrentPositionAsync = jest.fn().mockReturnValue({ coords: { longitude: 104.06, latitude: 30.67 } });

  // when
  const cityName = await service.getCurrentCityName();

  // then
  expect(cityName).not.toBeNull();
  expect(cityName).not.toBeUndefined();
  expect(cityName).toBe('成都市');
})
