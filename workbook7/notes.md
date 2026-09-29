# Workbook 7 Notes

## What is JSON?

JSON (JavaScript Object Notation) is a text format for representing data. A JavaScript object is converted into a string so it can travel over a network from one computer to another, then converted back into an object on the other end.

```js
const student = { name: "Ana", age: 21 };

const json = JSON.stringify(student); // object -> string
console.log(json); // '{"name":"Ana","age":21}'

const obj = JSON.parse(json); // string -> object
console.log(obj.name); // "Ana"
```

## Ways to Call an API

All examples use the free [JSONPlaceholder](https://jsonplaceholder.typicode.com) testing API.

| Method                | Can send   | Best for                   |
| --------------------- | ---------- | -------------------------- |
| Web browser           | `GET` only | Quickly viewing data       |
| REST Client / Postman | Any method | Testing endpoints          |
| JavaScript (`fetch`)  | Any method | Building real applications |

### 1. Web Browser

Paste a URL into the address bar. The browser always sends a `GET` request, so you can read data but not create, update, or delete it.

```
https://jsonplaceholder.typicode.com/posts/1
```

### 2. Tools

**REST Client** (VS Code extension): create a file ending in `.http`. Requests are separated by `###`, and a "Send Request" link appears above each one.

```http
### Get a single post
GET https://jsonplaceholder.typicode.com/posts/1

### Create a post
POST https://jsonplaceholder.typicode.com/posts
Content-Type: application/json

{
  "title": "Hello",
  "body": "My first post",
  "userId": 1
}
```

**Postman**: a standalone app for building and sending any type of request.

1. Choose the HTTP method (`GET`, `POST`, etc.)
2. Enter the endpoint URL
3. For `POST` or `PUT`, open **Body**, select **raw**, choose **JSON**, and enter the data
4. Click **Send** and inspect the status code and response

### 3. JavaScript Code

Use `fetch()` to make requests from a web page or Node.js.

```js
async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const post = await response.json(); // parse the JSON body
  console.log(post.title);
}

getPost().catch(console.error);
```

## Example Response

A successful `GET` to `/posts/1` returns status `200 OK` with this JSON body:

```json
{
  "userId": 1,
  "id": 1,
  "title": "magic tree house",
  "body": "magical exploration with jack, annie, and morgan la fe"
}
```