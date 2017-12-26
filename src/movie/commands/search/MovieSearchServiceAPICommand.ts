import { ICommand, ExecuteResult } from '../../../core'
import { Movie } from '@colorfulwindmill/five-films-interface'
import { MovieSearchBiz } from '../../biz'

export class MovieSearchServiceAPICommand implements ICommand<Movie.MovieSearchRequest, Movie.MovieSearchResponse> {
  public canExecute(request: Movie.MovieSearchRequest): boolean {
    return !!request;
  }

  public async execute(request: Movie.MovieSearchRequest) {
    const movieRecommendBiz = new MovieSearchBiz();
    return {
      handled: false,
      response: await movieRecommendBiz.search(request)
    }
  }
}
