{
    // constraint
    interface Lenghtwise {
        length: number;
    }

    function logginIdentity<T extends Lenghtwise>(arg: T): T {
        console.log(arg.length);
        return arg;
    }

    logginIdentity({length: 10});
}