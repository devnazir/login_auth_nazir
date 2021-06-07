#!/bin/sh

#curl -X GET http://localhost:3000/

curl -d '{"username":"bsjung", "password":"pinokio93"}' \
-H "Content-Type: application/json" \
-X POST http://localhost:3000/api/auth/register

echo
