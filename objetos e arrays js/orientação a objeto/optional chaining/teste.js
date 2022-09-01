const user = {
  name: 'matheus',
  age: 19,
  friends: [
    {nameFriend: 'Lucas', ageFriend: 17},
    {nameFriend: 'Enzo', ageFriend: 16},
    {nameFriend: 'Henrique', ageFriend: 18}
  ],
  functions: {
    sayHello(){
      return'prazer meu nome é ' + user.name
    },
    sayGoodbye(){
      return'até uma próxima ocasião'
    }
  }
}

console.log('\n', user?.friends?.[2].nameFriend ?? 'Ops!, algo deu errado', '\n')