import { APIBase, APIOption } from '../core'
import Constants  from 'expo-constants'
import { Location } from '@colorfulwindmill/five-films-interface'

export default class LocatonBaseService extends APIBase<APIOption> {
  protected getAPIOption() {
    
    return {
      apiKey: Constants.manifest.extra.api.location.apiKey,
      baseUri: Constants.manifest.extra.api.location.uri
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
