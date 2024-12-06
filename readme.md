# Installation and Configuration
* ```git clone https://github.com/lkgit1/learnly.git```
* ```npm install```

## Testing
Install Postman: https://www.postman.com/downloads/

* Get the JWT token for user access by visiting: localhost:9000/api/v1/get-token?id=drapprince@gmail.com&role=user
* For doctor access: localhost:9000/api/v1/get-token?id=doc_gbenga@gmail.com&role=doctor
* Copy the ```token``` from the response data.

Under the ```Headers``` tab, add a new key called ```Authorization``` and the value should be the token you just copied. 
![Postman config example](https://github.com/user-attachments/assets/77bb96b5-2cb6-4375-8d5e-abf23aacdbb2)


# API URL
localhost:9000/api/v1/

# Medical history
Endpoint: localhost:9000/api/v1/medical_histories [POST]

Sample payload:
{
    "patient": "Benedict John",
    "action": "Placed on 5 days admission to treat malaria",
    "date": "2024-12-19 12:00"
}

Sample response:
{
    "status": 200,
    "message": "ok",
    "data": [
        {
            "_id": "675348ed342ca93b923c7b5e",
            "patient": "Adamu Musa",
            "action": "Paid registration fee",
            "date": "2024-12-15T00:00:00.000Z",
            "created_at": "2024-12-06T18:56:45.766Z",
            "__v": 0
        }
    ]
}

Find history by patient name: localhost:9000/api/v1/medical_histories [GET]:
Sample payload:
{
    "patient": "Benedict John"
}

Sample response:
{
    "status": 200,
    "message": "ok",
    "data": {
        "_id": "67534a0a342ca93b923c7b64",
        "patient": "Benedict John",
        "action": "Placed on 5 days admission to treat malaria",
        "date": "2024-12-19T11:00:00.000Z",
        "created_at": "2024-12-06T19:01:30.624Z",
        "__v": 0
    }
}

Same setup applies for other endpoints

# Other endpoints
/api/v1/consultations [GET, POST, PATCH, DELETE]
/api/v1/tests [GET, POST, PATCH, DELETE]

# Chatbot (stub)
Endpoint: localhost:9000/api/v1/custom/chatbot [POST]

Sample payload:
{
    "message": "hello"
}

Sample response:
{
    "status": 200,
    "message": "Hi, how may I help you today?"
}
