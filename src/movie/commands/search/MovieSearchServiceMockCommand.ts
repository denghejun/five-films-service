import { ICommand, ExecuteResult } from '../../../core'
import { Movie } from '@colorfulwindmill/five-films-interface'
import { mockMovieSearchResponse } from '../../mock/MockMovieSearchResponse'

export class MovieSearchServiceMockCommand implements ICommand<Movie.MovieSearchRequest, Movie.MovieSearchResponse> {
  public canExecute(request: Movie.MovieSearchRequest): boolean {
    return !!request && request.mock;
  }

  public async execute(request: Movie.MovieSearchRequest): Promise<ExecuteResult<Movie.MovieRecommendResponse>> {
    return {
      handled: true,
      response: mockMovieSearchResponse
    };
  }
}
