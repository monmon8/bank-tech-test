# Bank

### Requirements 
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00


### How to run
1. clone this repo
2. run ```yarn```
3. run ```yarn test```

### Process of thought
I have attached some methods to the prototype: 
 - ``deposit`` : it deposits money
 - ``withdrawal`` : withdrawals money
 - ``addToStatement`` : is used internally to add transactions to the statement
 - ``printStatement`` : it prints the statement


### Environment setup:
 - yarn init -y
 - yarn add jest
 - yarn test --coverage
 - Babel helps us transpile es6 to es5
 - yarn add -D  mockdate 
 
 ### Screenshot of my running app:
 
 ![image](https://user-images.githubusercontent.com/50555113/65641724-6ebe9780-dfe5-11e9-9a7c-70d438562d31.png)
