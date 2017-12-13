import * as Interfaces from '@colorfulwindmill/five-films-interface'
import { processColor } from 'react-native'
import { WebBrowser } from 'expo'
import { injectable } from 'inversify'

@injectable()
export class BrowserService implements Interfaces.Common.BrowserService {
  public async open(url): Promise<Interfaces.Common.BrowserResult> {
    const result: Promise<Interfaces.Common.BrowserResult> = WebBrowser.openBrowserAsync(url);
    return result;
  }
}
