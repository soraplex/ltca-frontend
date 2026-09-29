# Workbook 8 Notes

## HTTP Methods at a Glance

| Method   | Action          | ID in URL                       | Headers        | Body          |
| -------- | --------------- | ------------------------------- | -------------- | ------------- |
| `GET`    | Read            | Optional (none = all, id = one) | None           | None          |
| `POST`   | Create (insert) | No                              | `Content-Type` | JSON, no `id` |
| `PUT`    | Update          | Yes                             | `Content-Type` | JSON, no `id` |
| `DELETE` | Delete          | Yes                             | None           | None          |

All examples use the free [JSONPlaceholder](https://jsonplaceholder.typicode.com) testing API.

## GET (read)

- The HTTP method must be `GET`, followed by the URL
- To get **all** records (an array), do not put an id at the end
- To get **one** record (an object), put an id at the end
- No headers or body needed

```http
### Get all posts (returns an array)
GET https://jsonplaceholder.typicode.com/posts

### Get one post (returns an object)
GET https://jsonplaceholder.typicode.com/posts/1
```

```js
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const post = await response.json();
```

## POST (insert)

- The HTTP method must be `POST` (**not** `GET`)
- Do **not** put an id in the URL
- Add a `Content-Type: application/json` header so the server knows the format of the body
- The body must be a JSON object
- Leave out the `id` property, since the server generates it
- JSON does not allow a trailing comma after the last property

```http
### Create a post
POST https://jsonplaceholder.typicode.com/posts
Content-Type: application/json

{
  "title": "Hello",
  "body": "My first post",
  "userId": 1
}
```

```js
const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Hello", body: "My first post", userId: 1 }),
});

const created = await response.json(); // includes the new id
```

## PUT (update)

- The HTTP method must be `PUT` (**not** `GET`)
- **Do** put an id in the URL, so the server knows which record to update
- Add a `Content-Type: application/json` header
- The body must be a JSON object
- Leave out the `id` property in the body
- No trailing comma after the last property

```http
### Update post 1
PUT https://jsonplaceholder.typicode.com/posts/1
Content-Type: application/json

{
  "title": "Updated title",
  "body": "Updated body",
  "userId": 1
}
```

```js
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Updated title", body: "Updated body", userId: 1 }),
});

const updated = await response.json();
```

## DELETE

- The HTTP method must be `DELETE`, followed by the URL
- Put an id at the end so the server knows which record to remove
- No headers or body needed

```http
### Delete post 1
DELETE https://jsonplaceholder.typicode.com/posts/1
```

```js
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});

console.log(response.status); // 200 here; many APIs return 204 No Content
```

## Common Mistakes

- **Leaving the method as `GET`** when trying to `POST` or `PUT`. The request succeeds but nothing is created or changed.
- **Forgetting the `Content-Type` header.** The server may not understand the body.
- **Putting an id in a `POST` URL**, or leaving it out of a `PUT` or `DELETE` URL.
- **Trailing commas in the JSON body.** This is invalid JSON and the request will fail.
- **Sending an `id` in the body.** The server generates it.

> **Note:** JSONPlaceholder is a fake API. It accepts `POST`, `PUT`, and `DELETE` and returns realistic responses (`201` with a new `id` for `POST`), but it doesn't save any changes.
