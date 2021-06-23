import Constants  from 'expo-constants'
import { APIBase, APIOption } from '../core'
import { injectable } from 'react-native-modular-bootstrapper'

@injectable()
export default abstract class MovieBaseService extends APIBase<APIOption> {
  protected getAPIOption(): APIOption {
    return {
      baseUri: this.getBaseUri(),
      apiKey: Constants.manifest.extra.api.movie.apiKey,
    } as APIOption;
  }

  protected abstract getBaseUri(): string;

  protected before(request: any): any {
    return Object.assign({}, {
      key: this.option.apiKey,
      dtype: 'json'
    }, request);
  }
}
