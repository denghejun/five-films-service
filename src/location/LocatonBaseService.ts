import { APIBase, APIOption } from '../core'
import * as Expo from 'expo'
import { Location } from '@colorfulwindmill/five-films-interface'

export default class LocatonBaseService extends APIBase<APIOption> {
  protected getAPIOption() {
    return {
      apiKey: Expo.Constants.manifest.extra.api.location.apiKey,
      baseUri: Expo.Constants.manifest.extra.api.location.uri
    } as APIOption;
  }

  protected before(request: Location.LocationSearchRequest): any {
    return Object.assign({},
      {
        ak: this.option.apiKey,
        output: 'json',
        pois: 0
      },
      {
        location: `${request.latitude},${request.longitude}`
      });
  }
}
