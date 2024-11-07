# pweb-express-mongodb-P05-2024

**NOTE: This project is using yarn. To initialize server, run:**

```
yarn run dev
```

## Development Flow

Create model (schema) > service > controller > router

## API Endpoints

### Authentication

- **User register**

`POST /auth/register`

Params

```
username: string;
email: string;
password: string;
```

- **User login**

`POST /auth/login`

Params

```
email: string;
password: string;
```

### Library (WIP)