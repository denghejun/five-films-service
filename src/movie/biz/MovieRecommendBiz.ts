import Constants  from 'expo-constants'
import MovieBaseService from '../MovieBaseService'
import { Movie, Common } from '@colorfulwindmill/five-films-interface'

export class MovieRecommendBiz extends MovieBaseService implements Movie.MovieRecommendService {
  protected getBaseUri(): string {
    return Constants.manifest.extra.api.movie.recommendServiceUri;
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
