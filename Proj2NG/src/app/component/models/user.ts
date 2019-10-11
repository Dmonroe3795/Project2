import { course } from './course';
import { role } from './role';

export class user{

    id : number;
    username : string;
    pass : string;
    firstname : string;
    lastname : string;
    courses : Array<course>;
    isInstructor : boolean;


    

    constructor(id : number,
        username : string,
        pass : string,
        firstname : string,
        lastname : string,
        courses : Array<course>,
        isInstructor : boolean){
        this.id = id;
        this.username = username;
        this.pass = pass;
        this.firstname = firstname;
        this.lastname = lastname;
        this.courses = courses;
        this.isInstructor = isInstructor;
    }

}