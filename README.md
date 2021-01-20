# fuzzy-system

A service integration API for currency exchange

baseUrl: `https://sleepy-falls-88925.herokuapp.com`

**GET** `/api/rates?base=baseCurrency&currency=currency1,currency2,currency3`

**Sample request** `/api/rates?base=CZK&currency=GBP,USD,EUR`

**Sample response**

```json
{
  "results": {
    "base": "CZK",
    "date": "2020-11-17",
    "rates": {
      "EUR": 0.0377244605,
      "GBP": 0.033795458,
      "USD": 0.044824204
    }
  }
}
```
