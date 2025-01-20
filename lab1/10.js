class BankAccount {
    constructor(accountHolder, balance = 0) {
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log('Insufficient funds');
      }
    }
  }
  
  function transfer(account, amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      account.deposit(amount);
    } else {
      console.log('Insufficient funds for transfer');
    }
  }
  
  const abhi = new BankAccount('Abhi', 1000);
  const raghu = new BankAccount('Raghu', 500);
  
  abhi.transfer = transfer;
  raghu.transfer = transfer;
  
  abhi.transfer(raghu, 200);
  
  console.log(abhi.balance);  
  console.log(raghu.balance);  
  
