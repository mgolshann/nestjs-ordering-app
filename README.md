
## Description

[Ordering App](https://github.com/nestjs/nest) is a small app which consists of several microservices. In these projects I use Rabbitmq as a Message Broker that allows all microservices to communicate through HTTP and RPC calls with each other. You first need to log in to the auth service and get your jwt token in your cookie. then you can create order.


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://s8.uupload.ir/files/test_zjho.jpg" width="700" alt="Nest Logo" /></a>
</p>



## Installation
The only requirement in order to have the Ordering app is to have Docker Compose in your machine. Other requirements will be installed automatically by docker compose. 

```bash
$ docker-compose up
```

## Services
| Services | Description |
| --- | --- |
| `Auth Service` | You can *login* and *logout* and get your *jwt token* to have permission to create order. |
| `Order Service` | You can create order if you have *jwt token*. |
| `Invoice Service` | When Order is created a RPC Call hit the Invoice service and your invoice message generated. |
| `RabbitMQ` | Allow different microservices communicate through *HTTP and RPC calls*. |
| `Envoy Proxy` | Is a wonderful tool to be used as a *Gateway*. |

# API endpoints

These endpoints allow you to test Ordering app through Postman.

## GET

| Services | Request Method | Description |
| --- | --- |
| `http://localhost:10000/users` | GET | get list of users. |
| `http://localhost:10000/orders` | GET | get list of orders. |
| `http://localhost:10000/auth/whoami` | GET | get current user. |
| `http://localhost:10000/auth/logout` | GET | logout user. |
| `http://localhost:10000/users` | POST | user create. |
| `http://localhost:10000/auth/login` | POST | login user. |
| `http://localhost:10000/orders` | POST | order create. |
| `http://localhost:10000/users/:id` | DELETE | delete user. |


## GET

| Services | Description |
| --- | --- |
| `http://localhost:10000/users` | get list of users. |
| `http://localhost:10000/orders` | get list of orders. |
| `http://localhost:10000/auth/whoami` | get current user. |
| `http://localhost:10000/auth/logout` | logout user. |


## POST
`http://localhost:10000` [/1/billing/start-trial.json](#post-1billingstart-trialjson) <br/>
`http://localhost:10000` [/1/billing/cancel-trial.json](#post-1billingcancel-trialjson) <br/>
`http://localhost:10000` [/1/billing/start-or-update-subscription.json](#post-1billingstart-or-update-subscriptionjson) <br/>
`http://localhost:10000` [/1/billing/cancel-subscription.json](#post-1billingcancel-subscriptionjson) <br/>
___


## Stay in touch

- Linkedin - [https://www.linkedin.com/in/mgolshann/](https://www.linkedin.com/in/mgolshann/)
- Gmail - [mgolshan.ir@gmail.com](https://gmail.com/)

## License

Nest is [MIT licensed](LICENSE).
