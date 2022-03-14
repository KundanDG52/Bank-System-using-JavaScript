function deposit(v)
{
    this.balance = this.balance + v;
    this.lt = v;
    return this;
}

function withdraw(v)
{
    if (this.balance >= v)
    {
        this.balance = this.balance - v;
        this.lt = -v;
    }
    return this;
}

function statement()
{
    console.log("Balance = " + this.balance);
    console.log("Last Transction = " + this.lt);
    return this;
}

function PiggyBank()
{
    this.balance = 0;
    this.lt = 0;
}

PiggyBank.prototype.deposit = deposit;

PiggyBank.prototype.withdraw = withdraw;

PiggyBank.prototype.statement = statement;

console.log("Behold the chaining");

var pg1 = new PiggyBank();

pg1.deposit(100).statement().withdraw(50).statement().withdraw(10).

statement();

new PiggyBank().deposit(200).statement().withdraw(100).statement().

withdraw(50).statement();

var pg3 = new PiggyBank();

pg3.deposit(300).statement().withdraw(200).statement().withdraw(100).

statement();
