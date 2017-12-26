import MovieBaseService from './MovieBaseService'
import { APIOption } from '../core'
import * as Expo from 'expo'
import { Movie, Common } from '@colorfulwindmill/five-films-interface'
import { injectable } from 'react-native-modular-bootstrapper'
import { mockMovieSearchResponse } from './mock/MockMovieSearchResponse'
import { MovieSearchServiceCommandProxy } from './commands'

@injectable()
export class MovieSearchService extends MovieBaseService implements Movie.MovieSearchService {
  protected getBaseUri(): string {
    return Expo.Constants.manifest.extra.api.movie.searchServiceUri;
  }

  public async search(request: Movie.MovieSearchRequest): Promise<Movie.MovieSearchResponse> {
    return (await new MovieSearchServiceCommandProxy().execute(request)).response;
  }
}
