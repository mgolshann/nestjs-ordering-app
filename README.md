<br />
## Description

[Ordering App](https://github.com/nestjs/nest) is a small app which consists of several microservices. In these projects I use Rabbitmq as a Message Broker that allows all microservices to communicate through HTTP and RPC calls with each other. You first need to log in to the auth service and get your jwt token in your cookie. then you can create order.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://s8.uupload.ir/files/test_zjho.jpg" width="700" alt="Nest Logo" /></a>
</p>

<br>

## Installation
The only requirement in order to have the Ordering app is to have Docker Compose in your machine. Other requirements will be installed automatically by docker compose. 

```bash
$ docker-compose up
```

<br>


## Services
| Services | Description |
| --- | --- |
| `Auth Service` | You can *login* and *logout* and get your *jwt token* to have permission to create order. |
| `Order Service` | You can create order if you have *jwt token*. |
| `Invoice Service` | When Order is created a RPC Call hit the Invoice service and your invoice message generated. |
| `RabbitMQ` | Allow different microservices communicate through *HTTP and RPC calls*. |
| `Envoy Proxy` | Is a wonderful tool to be used as a *Gateway*. |

<br>


# API Endpoints

These endpoints allow you to test Ordering app through Postman.


| End Point | Method | Requirements | Description |
| --- | --- | --- | --- |
| `http://localhost:10000/users` | GET | -- | get list of users. |
| `http://localhost:10000/orders` | GET | -- | get list of orders. |
| `http://localhost:10000/auth/whoami` | GET | -- | get current user. (jwt required) |
| `http://localhost:10000/auth/logout` | GET | -- | logout user. |
| `http://localhost:10000/users` | POST | {"name":"ali@gmail.com", "password":"1234"} | user create. (jwt required)|
| `http://localhost:10000/auth/login` | POST | {"name":"ali@gmail.com", "password":"1234"} | login user. |
| `http://localhost:10000/orders` | POST | {"name":"pen", "count":"2", "price":"10"} | order create. (jwt required)|
| `http://localhost:10000/users/:id` | DELETE | -- | delete user. |



___

<br><br>
## Stay in touch

- Linkedin - [https://www.linkedin.com/in/mgolshann/](https://www.linkedin.com/in/mgolshann/)
- Gmail - [mgolshan.ir@gmail.com](https://gmail.com/)
<br><br>
## License

Nest is [MIT licensed](LICENSE).
