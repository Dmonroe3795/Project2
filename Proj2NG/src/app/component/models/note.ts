import { course } from './course';
import { user } from './user';

export class note {

    id : number;
    filename : String;
    visible : boolean;
    trainer : user;

    constructor(
        n_id : number,
        filename : String,
        visible : boolean,
        trainer : user
    ) {
        this.n_id = n_id;
        this.filename = filename;
        this.visible = visible;
        this.trainer = trainer;
    }
}