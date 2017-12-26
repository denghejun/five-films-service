import { ICommand, ExecuteResult } from '../../../core'
import { Movie } from '@colorfulwindmill/five-films-interface'
import { MovieRecommendBiz } from '../../biz'

export class MovieRecommandServiceAPICommand implements ICommand<Movie.MovieRecommendRequest, Movie.MovieRecommendResponse> {
    public canExecute(request: Movie.MovieRecommendRequest): boolean {
        return !!request;
    }

    public async execute(request: Movie.MovieRecommendRequest) {
        const movieRecommendBiz = new MovieRecommendBiz();
        return {
            handled: false,
            response: await movieRecommendBiz.getRecommendMovies(request)
        }
    }
}
