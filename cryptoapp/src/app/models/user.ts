export class User {

        constructor(id: number,username : string, password : string, firstName : string, lastName : string)
        {
            this.id = id;
            this.firstName = firstName;
            this.password = password;
            this.lastName = lastName;
            this.username = username;
            
        }

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}