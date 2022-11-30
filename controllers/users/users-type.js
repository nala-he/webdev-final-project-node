class UsersType {
    static REGULAR = new UsersType('REG USER')
    static CHIEF =  new UsersType('PRO CHIEF')
    static CREATOR = new UsersType('RECIPE-CREATOR')

    constructor(name) {
        this.name = name
    }
}
export default UsersType;
