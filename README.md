# Real Time Data - Short Polling

1. Start Server (YARN)
```
-> yarn

-> yarn start
```

2. Start Server (NPM)
```
-> npm install

-> npm run start
```

3. Open web browser
```
http://localhost:3000/message
```

Real-time data refers to the practice of delivering information or updates to users as soon as they are available, without any significant delay. Long polling is a technique used to achieve real-time updates in web applications. Here's how it works:

1. **Client Sends Request**: The client (typically a web browser) sends a request to the server for new data. This is usually done via an HTTP GET request to a specific endpoint on the server.

2. **Server Waits for Data**: Instead of immediately responding to the client's request, the server keeps the connection open and waits for new data to become available.

3. **Data Available**: When new data is available, the server sends a response containing the data to the client.

4. **Client Receives Data**: The client receives the response from the server, processes the data, and possibly displays it to the user.

5. **Client Repeats**: After processing the received data, the client typically repeats the process by sending another request to the server to wait for more updates.

6. **Timeout Handling**: If no new data is available, the server may keep the connection open for a specified period (known as the timeout period). If no data is received within this period, the server sends an empty response to the client, prompting the client to send another request.

Long polling allows for real-time updates without the need for continuous polling (where the client repeatedly sends requests to the server at regular intervals), thus reducing unnecessary network traffic and server load.

Here are some key characteristics of long polling:

* **Simulates Real-Time**: Long polling simulates real-time updates by holding the connection open until new data is available.

* **High Latency**: While waiting for new data, the connection remains open, resulting in higher latency compared to traditional request-response cycles.

* **Resource Intensive**: Long polling can be resource-intensive on the server, as it requires maintaining potentially thousands of open connections.

* **Timeouts**: To prevent indefinite connections, long polling implementations usually include timeouts, after which the server sends a response even if no new data is available

Overall, long polling is a simple yet effective technique for achieving real-time updates in web applications, although it may not be the most efficient solution for high-volume or latency-sensitive applications. Other technologies like WebSockets or Server-Sent Events (SSE) may be more suitable for such scenarios.