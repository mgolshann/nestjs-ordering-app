



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://s8.uupload.ir/files/chart_q8fz.jpeg" width="700" alt="Nest Logo" /></a>
</p>



## Description

[Ordering App](https://github.com/nestjs/nest) is a small app which consists of several microservices. In these projects I use Rabbitmq as a Message Broker that allows all microservices to communicate with each other. You first need to log in to the auth service and get your jwt token in your cookie. then you can create order.


| Command | Description |
| --- | --- |
| `Auth` | You can *login* and *logout* and get your *jwt token* to have permission to create order |
| `Order` | You can create order if you have *jwt token* |
| `Invoice` | When Order is created a RPC Call hit the Invoice service and your invoice message generated |


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
