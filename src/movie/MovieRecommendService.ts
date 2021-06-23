import Constants from 'expo-constants'
import MovieBaseService from './MovieBaseService'
import { APIOption } from '../core'
import { Movie, Common } from '@colorfulwindmill/five-films-interface'
import { injectable } from 'react-native-modular-bootstrapper'
import { MovieRecommendCommandProxy } from './commands'

@injectable()
export class MovieRecommendService extends MovieBaseService implements Movie.MovieRecommendService {
  protected getBaseUri(): string {
    return Constants.manifest.extra.api.movie.recommendServiceUri;
  }

  public async getRecommendMovies(request: Movie.MovieRecommendRequest): Promise<Movie.MovieRecommendResponse> {
    return (await new MovieRecommendCommandProxy().execute(request)).response;
  }
}
