import { ICommand, ExecuteResult } from '../../core'
import { Movie } from '@colorfulwindmill/five-films-interface'
import Cache from 'react-native-cache-store'

export class MovieRecommendServiceGetCacheCommand implements ICommand<Movie.MovieRecommendRequest, Movie.MovieRecommendResponse> {
  public canExecute(request: Movie.MovieRecommendRequest): boolean {
    return !!request && request.cache && !!request.cacheKey
  }

  public async execute(request: Movie.MovieRecommendRequest): Promise<ExecuteResult<Movie.MovieRecommendResponse>> {
    let response;
    try { response = await Cache.get(request.cacheKey); } catch { }
    return {
      handled: !!response,
      response: response
    };
  }
}
