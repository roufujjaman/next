"use strict";
{
    // getter setter
    class Account {
        constructor(id, name, initialBalanc) {
            this.id = id;
            this.name = name;
            this._balance = initialBalanc;
        }
        get balance() {
            return this._balance;
        }
        set deposit(amount) {
            // other type cheking
            this._balance += amount;
        }
    }
    const user1 = new Account(111, 'Juliett', 200);
    user1.deposit = 500;
    console.log(user1.balance);
}
