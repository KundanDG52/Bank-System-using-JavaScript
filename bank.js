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

function Bank()
{
    this.balance = 0;
    this.lt = 0;
}

Bank.prototype.deposit = deposit;

Bank.prototype.withdraw = withdraw;

Bank.prototype.statement = statement;

console.log("Behold the chaining");

var pg1 = new Bank();

pg1.deposit(100).statement().withdraw(50).statement().withdraw(10).

statement();

new Bank().deposit(200).statement().withdraw(100).statement().

withdraw(50).statement();

var pg3 = new Bank();

pg3.deposit(300).statement().withdraw(200).statement().withdraw(100).

statement();
