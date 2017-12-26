import { ICommand, ExecuteResult } from '../../../core'
import { Movie } from '@colorfulwindmill/five-films-interface'
import { mockMovieRecommendResponse } from '../../mock/MockMovieRecommendResponse'

export class MovieRecommendServiceMockCommand implements ICommand<Movie.MovieRecommendRequest, Movie.MovieRecommendResponse> {
  public canExecute(request: Movie.MovieRecommendRequest): boolean {
    return !!request && request.mock;
  }

  public async execute(request: Movie.MovieRecommendRequest): Promise<ExecuteResult<Movie.MovieRecommendResponse>> {
    return {
      handled: true,
      response: mockMovieRecommendResponse
    };
  }
}
