import * as  Services from './src'
import { ServiceContract } from 'react-native-modular-bootstrapper'

export default class AppModuleProvider implements ServiceContract.ModuleProvider {
  public registerModules(): any[] {
    return [Services.ServiceModule];
  }
}
