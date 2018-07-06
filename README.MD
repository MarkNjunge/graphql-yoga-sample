# graphql-yoga sample

A sample GraphQL Server built using [graphql-yoga](https://github.com/graphcool/graphql-yoga).  
The sample shows how to implement queries, mutations, subscrptions as well as accessing headers.

[**Live version**](https://secret-castle-94933.herokuapp.com/playground)

## Installation

```
git clone https://github.com/MarkNjunge/graphql-yoga-sample.git

yarn

yarn start
```

GraphQL Playground will be avaiable at [`localhost:3000/playground`](http://localhost:3000/playground).  
The GraphQL endpoint will be `localhost:3000/graphql`

## Sample queries

### Query

``` graphql
query {
  hello(name:"Mark")
}

# Returns data from a header
query {
  header(headerName:"Authorization")
}
```

### Mutation

``` graphql
mutation {
  changeCount(value:10)
}
```

### Subscrption

``` graphql
subscription {
  helloSub{
    total
    greeting
  }
}
```
