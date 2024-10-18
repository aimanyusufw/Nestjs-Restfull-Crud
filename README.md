<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Created with NestJS Framework

## 👋 Hello, my friend! This is my code documentation for learning NestJS.

In this repository, I have created a simple CRUD operation using NestJS. There’s nothing particularly special about this repo, but for me, it may serve as a useful reference for building future applications. I’m sharing this code with friends who are also learning NestJS, and hopefully, we can learn together.

## Table of Contents

1. [Install This Project](#install-project)
2. [Get All Products](#get-all-products)
3. [Get Product By Id](#get-product-by-id)
4. [Create Product](#create-product)
5. [Update Product](#update-product)
6. [Delete Product](#delete-product)

---

## Install Project

### Clone the project

```bash
$ git clone {repository_url}
```

### Installation

```bash
$ yarn install
```

### Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## 1. Get All Products

- **Path:** `/api/v1/products`
- **Method:** `GET`
- **Description:** Retrieve a list of all products.

### Request:

- **Parameters:** None

### Example:

```bash
GET /api/v1/products
```

### Response:

- **Status:** `200 OK`
- **Content-Type:** `application/json`

```json
{
  "message": "Success get all product",
  "data": [
    {
      "id": "1",
      "name": "string",
      "price": 1,
      "stock": 1,
      "weight": 1
    },
    {
      "id": "2",
      "name": "string",
      "price": 1,
      "stock": 1,
      "weight": 1
    }
  ]
}
```

## 2. Get Product By Id

- **Path:** `/api/v1/products/{id}`
- **Method:** `GET`
- **Description:** Get a product by the ID.

### Request:

- **Parameters:**

| Parameter | Type   | Reuired | Desciption        |
| --------- | ------ | ------- | ----------------- |
| id        | string | Yes     | Id of the product |

### Example:

```bash
GET /api/v1/products/2
```

### Response:

- **Status:** `200 OK`
- **Content-Type:** `application/json`

```json
{
  "message": "Success get product",
  "data": {
    "id": "2",
    "name": "string",
    "price": 1,
    "stock": 1,
    "weight": 1
  }
}
```

## 3. Create Product

- **Path:** `/api/v1/products/create`
- **Method:** `POST`
- **Description:** Create a product.

### Request:

- **Parameters:** None
- **body** :

| Parameter | Type   | Reuired | Desciption            |
| --------- | ------ | ------- | --------------------- |
| name      | string | Yes     | Name of the product   |
| price     | number | Yes     | Price of the product  |
| stock     | string | Yes     | Stock of the product  |
| weight    | string | Yes     | Weight of the product |

### Example:

```bash
POST /api/v1/products
{
	"name": "Product 3",
	"price": 200,
	"stock" : 1,
	"weight" : 1
}
```

### Response:

- **Status:** `200 OK`
- **Content-Type:** `application/json`

```json
{
  "message": "Success get all product",
  "data": {
    "id": "3",
    "name": 200,
    "price": 1,
    "stock": 1,
    "weight": 1
  }
}
```

## 4. Update Product

- **Path:** `/api/v1/products/{id}/update`
- **Method:** `PUT`
- **Description:** Update an existing product.

### Request:

- **Parameters:**

| Parameter | Type   | Reuired | Desciption        |
| --------- | ------ | ------- | ----------------- |
| id        | string | Yes     | Id of the product |

- **body** :

| Parameter | Type   | Reuired | Desciption            |
| --------- | ------ | ------- | --------------------- |
| name      | string | No      | Name of the product   |
| price     | number | No      | Price of the product  |
| stock     | string | No      | Stock of the product  |
| weight    | string | No      | Weight of the product |

### Example:

```bash
POST /api/v1/products/4/update
{
	"name": "Product 4 Update",
}
```

### Response:

- **Status:** `200 OK`
- **Content-Type:** `application/json`

```json
{
  "message": "Success get all product",
  "data": {
    "id": "4",
    "name": "string",
    "price": 1,
    "stock": 1,
    "weight": 1
  }
}
```

## 5. Delete Product

- **Path:** `/api/v1/products/{id}`
- **Method:** `DELETE`
- **Description:** Delete product with parameter id.

### Request:

- **Parameters:**

| Parameter | Type   | Reuired | Desciption        |
| --------- | ------ | ------- | ----------------- |
| id        | string | Yes     | Id of the product |

### Example:

```bash
DELETE /api/v1/products/5
```

### Response:

- **Status:** `200 OK`
- **Content-Type:** `application/json`

```json
{
  "message": "Success delete product",
  "data": {
    "id": "5",
    "name": "string",
    "price": 1,
    "stock": 1,
    "weight": 1
  }
}
```
