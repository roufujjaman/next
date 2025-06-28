# 📚 LIBRARY MANAGEMENT API

Links:

> ✅ **[LIVE API LINK](library-ecru-beta.vercel.app/api/books)**

> ✅ **[GITHUB REPO](library-ecru-beta.vercel.app/api/books)**

Contents:

- [Installation](#-installation)
- [Project Structure](#-poject-structure)
- [Schema](#-schema)
- [API Endpoints](#-api-endpoints-example-request)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/yourproject.git
cd yourproject

# Install dependencies
npm install

# Rename the .env file and fill in the values to work with mongoDB
mv .\.env.example .env

# Run the server
npm run dev

```

- 🌍 Environment Variables
  | Variable | Description |
  | ----------------- | ------------------------------ |
  | `PORT` | Port the app will run on |
  | `MONGO_USER_ID` | mongoDB database user |
  | `MONGO_USER_PASS` | mongoDB database user password |

## 📁 Poject Structure

```
└── src
    ├── app
    │   ├── controllers
    │   ├── interfaces
    │   └── models
    ├── app.js
    └── server.js
```

## 📡 Schema

### 📖 Book

| Field         | Type    | Required | Description                                                                                         |
| ------------- | ------- | -------- | --------------------------------------------------------------------------------------------------- |
| `title`       | string  | ✅ Yes   | Title of the book                                                                                   |
| `author`      | string  | ✅ Yes   | Author's name                                                                                       |
| `genre`       | string  | ✅ Yes   | One of the followiung Genre. `FICTION`, `NON_FICTION`, `SCIENCE`, `HISTORY`, `BIOGRAPHY`, `FANTASY` |
| `isbn`        | string  | ✅ Yes   | International Standard Book Number                                                                  |
| `description` | string  | ❌ No    | A short summary of the book                                                                         |
| `copies`      | number  | ✅ Yes   | Total number of copies                                                                              |
| `available`   | boolean | ✅ Yes   | Whether the book is currently available                                                             |

### 📝 Borrow

| Field       | Type     | Required | Description                          |
| ----------- | -------- | -------- | ------------------------------------ |
| `book `     | ObjectId | ✅ Yes   | Object id of the book to be borrowed |
| `quantity ` | string   | ✅ Yes   | Quantity to be borrowed              |
| `dueDate `  | string   | ✅ Yes   | When the book will be returned       |

## 📡 API Endpoints (Example Request)

REQUEST `POST /api/books`

```json
{
	"title": "The Happiest Man on Earth",
	"author": "Eddie Jaku",
	"genre": "BIOGRAPHY",
	"isbn": "9781760980085",
	"description": "Life can be beautiful if you make it beautiful. It is up to you.",
	"copies": 5,
	"available": true
}
```

RESPONSE `200 OK`

```json
{
	"success": true,
	"message": "Book created successfully",
	"data": {
		"title": "The Happiest Man on Earth",
		"author": "Eddie Jaku",
		"genre": "BIOGRAPHY",
		"isbn": "9781760980085",
		"description": "Life can be beautiful if you make it beautiful. It is up to you.",
		"copies": 5,
		"available": true,
		"_id": "685fcb02af5b312a9394cedd",
		"createdAt": "2025-06-28T10:59:14.783Z",
		"updatedAt": "2025-06-28T10:59:14.783Z"
	}
}
```

---

REQUEST : `GET /api/books?filter=BIOGRAPHY`

RESPONSE : `200 OK`

```json
{
	"success": true,
	"message": "Books retrieved successfully",
	"data": [
		{
			"_id": "685fcb02af5b312a9394cedd",
			"title": "The Happiest Man on Earth",
			"author": "Eddie Jaku",
			"genre": "BIOGRAPHY",
			"isbn": "9781760980085",
			"description": "Life can be beautiful if you make it beautiful. It is up to you.",
			"copies": 5,
			"available": true,
			"createdAt": "2025-06-28T10:59:14.783Z",
			"updatedAt": "2025-06-28T10:59:14.783Z"
		},
        ...
	]
}

```

- Available filters
  | Key | Value Description |
  | --------- | ----------------------------------------------------------------------------- |
  | `filter ` | Any of `FICTION`, `NON_FICTION`, `SCIENCE`, `HISTORY`, `BIOGRAPHY`, `FANTASY` |
  | `sortBy ` | Any feild |
  | `sort ` | `asc` or `desc` or `ascending` or `descending` |
  | `limit ` | given vlaue or default `10` |

---

REQUEST : `GET /api/books/:bookId`

RESPONSE : `200 OK`

```json
{
    "success": true,
    "message": "Book retrieved successfully",
    "data": {
       ...book
    }
}
```

---

REQUEST : `PUT /api/books/:bookId`

```json
{
	"copies": 5
}
```

RESPONSE : `200 OK`

```json
{
    "success": true,
    "message": "Book updated successfully",
    "data": {
        "copies": 15, // increment copies with new added books
        ...
    }
}
```

---

REQUEST : `DELETE /api/books/:bookId`

RESPONSE : `200 OK`

```json
{
	"success": true,
	"message": "Book deleted successfully",
	"data": {
		"_id": "685eaac3cba08bed501aa596",
		...
	}
}
```

---

REQUEST : `POST /api/borrow`

```json
{
	"book": "685eaff99dd3b0b75299829f",
	"quantity": 1,
	"dueDate": "2025-06-29T00:00:00.000Z"
}
```

- Body Paremeters
  | Key | Value Description |
  | ---------- | ------------------------------- |
  | `book ` | Must be a valid book id |
  | `quanity ` | Must be a valid positive number |
  | `dueDate ` | Must be a future date |

RESPONSE : `200 OK`

```json
{
	"success": true,
	"message": "Book borrowed successfully",
	"data": {
		"book": "685eaff99dd3b0b75299829f",
		"quantity": 1,
		"dueDate": "2025-06-29T00:00:00.000Z",
		"_id": "685fd394f96bb1a96b29a293",
		"createdAt": "2025-06-28T11:35:48.442Z",
		"updatedAt": "2025-06-28T11:35:48.442Z"
	}
}
```

---

REQUEST : `GET /api/borrow`

RESPONSE : `200 OK`

```json
{
	"success": true,
	"message": "Borrowed books summary retrieved successfully",
	"data": [
		{
			"totalQuantity": 3,
			"book": {
				...
			}
		},
		...
	]
}
```

---
