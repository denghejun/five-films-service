import LocationBaseService from './LocatonBaseService'
import { Location, Common } from '@colorfulwindmill/five-films-interface'
import * as Expo from 'expo'
import * as Permissions from 'expo-permissions'
import * as ExpoLocation from 'expo-location'

export class CitySearchService extends LocationBaseService implements Location.LocationSearchService {
  protected async searchCity(request: Location.LocationSearchRequest): Promise<Location.LocationSearchResponse> {
    const response: Location.LocationSearchResponse = await this.get<Location.LocationSearchRequest, Location.LocationSearchResponse>(request);
    if (response.status === 0) {
      return response;
    } else {
      return Promise.reject<Location.LocationSearchResponse>(new Common.Error<Location.LocationSearchResponse>(response.message, response));
    }
  }

  public async getCurrentCityName(): Promise<string> {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      return Promise.reject<string>(new Common.Error<any>('Permission to access location was denied', null));
    }

    const whereamI = await ExpoLocation.getCurrentPositionAsync();
    const { coords: { longitude, latitude } } = whereamI;
    const response = await this.searchCity({ latitude, longitude } as Location.LocationSearchRequest);
    return response.result.addressComponent.city;
  }
}
