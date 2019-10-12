import { note } from './note';
import { user } from './user';

export class course {

    id: number;
    notes: note[];
    trainer: user;
    name: string;
    users: user[];

    constructor(
        id: number,
        notes: note[],
        trainer: user,
        name: string,
        users: user[]
    ) {
        this.id = id;
        this.notes = notes;
        this.trainer = trainer;
        this.name = name;
        this.users = users;
    }

}