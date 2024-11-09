# pweb-express-mongodb-P05-2024

## Initial Setup

**NOTE: This project is using yarn.**

Install dependencies with:

```
yarn install
```

Run dev server with:

```
yarn run dev
```

**Setting .env**

Create an .env file based on `.env.example`.

```
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority"
JWT_SECRET=""
```

- MONGODB_URI can be obtained by going into MongoDB Atlas > Connect > Drivers (Use v5.5 stable API)

- JWT_SECRET can be anything, like `qwertyuiopasdfghjklzxcvbnm`

## Development Flow

Create model (schema) > service > controller > router

## API Endpoints

### Authentication

- **User register**

`POST {{BASE_URL}}/auth/register`

Params

```
username: string;
email: string;
password: string;
```

- **User login**

`POST {{BASE_URL}}/auth/login`

Params

```
email: string;
password: string;
```

### Books (WIP)

- Get All Books

`GET {{BASE_URL}}/book`

- Get Book by ID

`GET {{BASE_URL}}/book/:id`

- Add New Book

`POST {{BASE_URL}}/book`

- Modify Book Data

`PATCH {{BASE_URL}}/book/:id`

- Remove Book

`DELETE {{BASE_URL}}/book/:id`

### Mechanism (WIP)

- Borrow a Book

`POST {{BASE_URL}}/mechanism/borrow/:id`

- Return a Book

`POST {{BASE_URL}}/mechanism/return/:id`

### Misc

Health Check

`GET {{BASE_URL}}/`