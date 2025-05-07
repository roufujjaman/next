"use strict";
{
    // access modifiers
    class Account {
        constructor(id, name, initialBalanc) {
            this.id = id;
            this.name = name;
            this._balance = initialBalanc;
        }
        deposit(amount) {
            // other type cheking
            this._balance += amount;
        }
        balance() {
            return this._balance;
        }
    }
    const user1 = new Account(111, 'Juliett', 200);
    user1.deposit(500);
    console.log(user1.balance());
}
