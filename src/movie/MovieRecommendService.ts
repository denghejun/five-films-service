import * as Expo from 'expo'
import MovieBaseService from './MovieBaseService'
import { APIOption } from '../core'
import { Movie, Common } from '@colorfulwindmill/five-films-interface'
import { injectable } from 'react-native-modular-bootstrapper'

@injectable()
export class MovieRecommendService extends MovieBaseService implements Movie.MovieRecommendService {
  protected getBaseUri(): string {
    return Expo.Constants.manifest.extra.api.movie.recommendServiceUri;
  }

  public async getRecommendMovies(request: Movie.MovieRecommendRequest): Promise<Movie.MovieRecommendResponse> {
    const response: Movie.MovieRecommendResponse = await this.get<Movie.MovieRecommendRequest, Movie.MovieRecommendResponse>(request);
    if (response === undefined || response.error_code !== 0) {
      return Promise.reject<Movie.MovieRecommendResponse>(
        new Common.Error<Movie.MovieRecommendResponse>(response.reason, response));
    }
    else {
      return response;
    }
  }
}
