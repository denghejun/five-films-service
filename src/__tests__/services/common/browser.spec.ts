import 'react-native'
import * as React from 'react'
import { BrowserService } from '../../../index'

it('[common-browser-open : 01] should has no error to open baidu.com', async () => {
  // given
  const url = 'https://expo.io';
  const service = new BrowserService();

  // when
  const result = await service.open(url);

  // then
  expect(result).toBeUndefined();
})
