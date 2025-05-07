{
    // getter setter
    class Account {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, initialBalanc: number){
            this.id = id;
            this.name = name;
            this._balance = initialBalanc;
        }
        
        get balance(): number{
            return this._balance;
        }


        set deposit(amount: number){
            // other type cheking
            this._balance += amount;
        }

    }

    
    const user1: Account = new Account(111, 'Juliett', 200);
    
    user1.deposit = 500;
    console.log(user1.balance);

}