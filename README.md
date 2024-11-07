# pweb-express-mongodb-P05-2024

**NOTE: This project is using yarn.**

Install dependencies with:

```
yarn install
```

Run dev server with:

```
yarn run dev
```

## Development Flow

Create model (schema) > service > controller > router

## API Endpoints

### Authentication

- **User register**

`POST {{BASE_URL}}//auth/register`

Params

```
username: string;
email: string;
password: string;
```

- **User login**

`POST {{BASE_URL}}//auth/login`

Params

```
email: string;
password: string;
```

### Books (WIP)

- Get All Books

`GET {{BASE_URL}}//books`

- Get Book by ID

`GET {{BASE_URL}}//books/:id`

- Add New Book

`POST {{BASE_URL}}//books`

- Modify Book Data

`PATCH {{BASE_URL}}//books/:id`

- Remove Book

`DELETE {{BASE_URL}}//books/:id`

### Mechanism (WIP)

- Borrow a Book

`POST {{BASE_URL}}//mechanism/borrow/:id`

- Return a Book

`POST {{BASE_URL}}//mechanism/return/:id`

### Misc

Health Check

`{{BASE_URL}}/GET /`