#!/bin/sh

token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjg4MDlmMWUwOWIyYzNmNGIyM2ZhM2YiLCJ1c2VybmFtZSI6ImJzanVuZyIsImFkbWluIjp0cnVlLCJpYXQiOjE2MDI3NTE1NDUsImV4cCI6MTYwMzM1NjM0NSwiaXNzIjoidmVsb3BlcnQuY29tIiwic3ViIjoidXNlckluZm8ifQ.XpwUAL7rC0GX3vjYmkoFfbraQS6uCEtS1wtWaKLcP0M"

#curl -H "Content-Type: application/json"  \
#-H "x-access-token: $token" \
#-X GET http://localhost:3000/api/auth/check

curl -H "Content-Type: application/json"  \
-H "x-access-token: $token" \
-X GET http://localhost:3000/api/user/list

echo
