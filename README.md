# Toolbox api test

- Sequence diagram >>> https://cs1.ssltrust.me/s/6u9aC5hCTEhTpT1

## Stack

- Backend
  - [Express.js](https://expressjs.com/)
  - [Swagger](https://swagger.io/)
  - [Mocha.js](https://mochajs.org/)
  - [Chai.js](https://www.chaijs.com/)
- Frontend
  - [React.js](https://reactjs.org/)

## Highlights

- Clean architecture
- Clean code
- MVC pattern
- API versioning
- Docker
- Unit testing
- Custom labels in repository
- Follow guidelines

## Requeriments
Mandatory

- Node >= 14.7.3

Optional

- Docker >= 23.0.3

## Local configuration
If you wish run the project without docker, then:

1. npm install
2. npm run start
3. go to `http://localhost:4000/`
4. see the magic

If you wish run the project with docker, then:

1. docker-compose up
2. go to `http://localhost:4000/`
3. see the magic

If you wish run the test, then:

1. npm run test

## Folder structure
Explanation of hierarchies in files and layers.

    toolbox-api-test/
      └── src/                             # Application folder (MVC strategy)
          ├── constants/                   # General constants folder
          ├── controllers/                 # Controller folder
          ├── routes/                      # General API routes folder (API versionning strategy)
          |   ├── v1/                      # Especific API routes v1 folder
          |   └── v2/                      # Especific API routes v2 folder
          ├── services/                    # Services folder (Business logic)
          └── test/                        # Test folder

## Branches

- `main` >>> All features
- `feature/initial-configurations` >>> initial configurations
- `feature/create-endpoint` >>> create endpoint

## Other details

If you wish see and test the swagger, then:

1. go to `http://localhost:4000/toolbox-api-v2/docs`

# License

MIT
