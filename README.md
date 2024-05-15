# Mobile Factory code challenge

## Mobile Factory Server

The server application is built using **Node.js and Express** framework. It listens for incoming requests, calculates the total and parts based on the received components, and sends back the response to the client.

## Global Variables

O: Order ID

T: Total

P: Parts

## Component Data

Component data is stored in a Map object where each component is mapped to its price and description.

## Endpoint

**POST /**: Receives the components array in the request body, calculates the total and parts, and sends back the response.

**GET /orders**: Displays the order details including order ID, total, and parts.

## Running the Server

To run the server, execute node server.js in the terminal. The server will run on **localhost:8080.**

## Client

The client application sends a POST request to the server with a JSON payload containing the components array.

## Sending Request

Method: POST

Endpoint: localhost:8080

Headers:

Content-Type: application/json


## Running the Application

1. Start the server by running node server.js.

2. Execute the client code to send a POST request to the server.

OR

```curl -X POST -H "Content-Type: application/json" -d "{\"components\": [\"I\", \"B\", \"D\", \"F\", \"K\"]}" http://localhost:8080 ```

execute this command from command prompt directly using your customized inputs.

View the response from the server either in the console or by accessing ***localhost:8080/orders*** in a web browser.

There is a button to go the http://localhost:8080/orders on the home page

"NOTE: Feel free to customize the client request according to your requirements from the client code or direct input"

## Owner

[Vedanshi](https://github.com/vedanshi0512)

