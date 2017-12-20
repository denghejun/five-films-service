import { ServicesModule } from './module'
import { ServiceContract } from 'react-native-modular-bootstrapper'

export default class AppModuleProvider implements ServiceContract.ModuleProvider {
  public registerModules(): (new () => ServiceContract.Module)[] {
    return [ServicesModule];
  }
}
