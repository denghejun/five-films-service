import MovieBaseService from './MovieBaseService'
import { APIOption } from '../core'
import * as Expo from 'expo'
import { Movie, Common } from '@colorfulwindmill/five-films-interface'
import { injectable } from 'react-native-modular-bootstrapper'

@injectable()
export class MovieSearchService extends MovieBaseService implements Movie.MovieSearchService {
  protected getBaseUri(): string {
    return Expo.Constants.manifest.extra.api.movie.searchServiceUri;
  }

  public async search(request: Movie.MovieSearchRequest): Promise<Movie.MovieSearchResponse> {
    const response: Movie.MovieSearchResponse = await this.get<Movie.MovieSearchRequest, Movie.MovieSearchResponse>(request);
    if (response === undefined || response.error_code !== 0) {
      return Promise.reject<Movie.MovieSearchResponse>(
        new Common.Error<Movie.MovieSearchResponse>(response.reason, response));
    }
    else {
      return response;
    }
  }
}
