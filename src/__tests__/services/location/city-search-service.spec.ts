import { CitySearchService } from '../../../index'

it('[current-city-search : 01] should get a valid city name', async () => {
  // given
  const service = new CitySearchService();

  // when
  const cityName = await service.getCurrentCityName();

  // then
  expect(cityName).not.toBeNull();
  expect(cityName).not.toBeUndefined();
})
