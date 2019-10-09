import { course } from './course';
import { user } from './user';

export class note {

    id : number;
    filename : String;
    visible : boolean;
    trainer : user;

    constructor(
    ) {
    }
}