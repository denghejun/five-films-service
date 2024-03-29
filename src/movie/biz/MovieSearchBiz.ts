import MovieBaseService from '../MovieBaseService'
import Constants  from 'expo-constants'
import { Movie, Common } from '@colorfulwindmill/five-films-interface'

export class MovieSearchBiz extends MovieBaseService implements Movie.MovieSearchService {
  protected getBaseUri(): string {
    return Constants.manifest.extra.api.movie.searchServiceUri;
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
