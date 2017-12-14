import { Movie, Common } from '@colorfulwindmill/five-films-interface'
import { MovieServiceSpecHelper } from './movie-service'
import { MovieSearchService } from '../../../index'

it('[movie-search-service : 01] should get a valid movie when giving valid movie name',
  async () => {
    // given
    const q: Movie.MovieSearchRequest = { q: '猫和老鼠' };

    // when
    const service = new MovieSearchService();

    // then
    await service.search(q).then(response => {
      expect(response).not.toBeUndefined();
      expect(response.reason).toBe('查询成功');
      expect(response.error_code).toBe(0);
      expect(response.result).not.toBeUndefined();
      expect(response.result.act).toBe('猫和老鼠');
    }, error => {
      MovieServiceSpecHelper.AssertMovieServiceError(error);
    });
  })
