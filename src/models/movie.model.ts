import {model, Schema, Model, Document} from 'mongoose';

export interface IMovie extends Document {
    id: string;
    movieName: string;
    votes: number;
    movieNameID: string;
}

const MovieSchema: Schema = new Schema({
    id: {type: String, required: true },
    movieName: {type: String, required: true },
    votes: {type: Number, required: true },
    movieNameID: {type: String, required: true }
});

export const MovieModel: Model<IMovie> = model<IMovie>('movies', MovieSchema);