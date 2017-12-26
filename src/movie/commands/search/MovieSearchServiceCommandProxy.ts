import { CommandProxy } from '../../../core/command'
import { Movie } from '@colorfulwindmill/five-films-interface'
import { MovieSearchServiceAPICommand } from './MovieSearchServiceAPICommand'
import { MovieSearchServiceMockCommand } from './MovieSearchServiceMockCommand'

export class MovieSearchServiceCommandProxy extends CommandProxy<Movie.MovieSearchRequest, Movie.MovieSearchResponse> {
  protected registerCommands() {
    return [
      new MovieSearchServiceMockCommand(),
      new MovieSearchServiceAPICommand()
    ];
  }
}
