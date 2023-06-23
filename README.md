



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://s8.uupload.ir/files/test_zjho.jpg" width="700" alt="Nest Logo" /></a>
</p>



## Description

[Ordering App](https://github.com/nestjs/nest) is a small app which consists of several microservices. In these projects I use Rabbitmq as a Message Broker that allows all microservices to communicate through HTTP and RPC calls with each other. You first need to log in to the auth service and get your jwt token in your cookie. then you can create order.


| Microservices | Description |
| --- | --- |
| `Auth` | You can *login* and *logout* and get your *jwt token* to have permission to create order. |
| `Order` | You can create order if you have *jwt token*. |
| `Invoice` | When Order is created a RPC Call hit the Invoice service and your invoice message generated. |
| `Rabbit MQ` | Allow different microservices communicate through *HTTP and RPC calls*. |
| `Envoy Proxy` | Is a wonderful tool to be used as a *Gateway*. |


## Installation
The only requirement in order to have the Ordering app is to have Docker Compose in your machine. Other requirements will be installed automatically by docker compose. 

```bash
$ docker-compose up
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Mohammad Golshan](https://www.linkedin.com/in/mgolshann/)
- Linkedin - [https://www.linkedin.com/in/mgolshann/](https://www.linkedin.com/in/mgolshann/)
- Gmail - [mgolshan.ir@gmail.com](https://gmail.com/)

## License

Nest is [MIT licensed](LICENSE).
