import { course } from './course';
import { user } from './user';

export class note {

    id: number;
    filename: string;
    visible: boolean;
    trainer: user;

    constructor(
        id: number,
        filename: string,
        visible: boolean,
        trainer: user
    ) {
        this.id = id;
        this.filename = filename;
        this.visible = visible;
        this.trainer = trainer;
    }
}