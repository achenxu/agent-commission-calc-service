# Agent Commission Calculation Service

## Assumptions
* Commission calculator to be written as a separate service
* Currently only 2 plans available and no plans to be added in near future (adding more plans would require adding database)

## Usage

### To start app use (you will need docker and docker-compose installed on your machine)
```
docker-compose up
```
### App will be listening on 
```
port 3000
```
### Route
```
post /commissions
```

### Valid plan params
```
"planA"
"planB"
```
### Sample params (JSON)
```
{ 
    "plan": "planA"
    "amount": 100000
}
```
### Sample Response
```
[
    {
        "agentName": "sellingAgent",
        "commissionAmount": 1000
    },
    {
        "agentName": "superAgent1",
        "commissionAmount": 125
    },
    {
        "agentName": "superAgent2",
        "commissionAmount": 0
    },
    {
        "agentName": "superAgent3",
        "commissionAmount": 0
    }
]
```
### Example curl: 
```
curl -d '{"plan":"planA", "amount":100000}' -H "Content-Type: application/json" -X POST http://localhost:3000/commissions
```
### Running tests
```
docker-compose run web npm test
```

## Potential Next steps
* actual deploy (AWS/kubernetes)
* add logging
* add database
* add monitoring (e.g., New Relic)
* add auth
* add acceptance tests
