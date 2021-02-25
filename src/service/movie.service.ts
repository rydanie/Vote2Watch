import {MovieRepository} from '../repository/movie.repository';

export class MovieService {

    private movieRepository: MovieRepository;

    constructor() {
        this.movieRepository = new MovieRepository();
    }

    async getMovies() {
        return await this.movieRepository.getMovies();
    }

    async createMovie(movie) {
        return await this.movieRepository.createMovie(movie);
    }

    async updateMovie(movie) {
        return await this.movieRepository.updateMovie(movie);
    }

    async deleteMovie(movieId) {
        return await this.movieRepository.deleteMovie(movieId);
    }
}