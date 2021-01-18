## Author
Efunkunle Olalekan

## How to use
The endpoint(/api/rates) accepts the following request query parameter strings
1. **base**: the home currency rates to be quoted against (i.e. `CZK`)
2. **currency**: the specific exchange rates based on a comma-separated symbols parameter (i.e. `EUR,GBP,USD`).
3. some currency codes **may**  e.g (`NGN`) not be valid, so an error is returned.


## The endpoint returns the following
1. **results**: JSON object containing the results from the API
2. **base**: the requested home rate from the request URL query strings
3. **date**: the current date 
4. **rates**: An Object containing the requested currency in the request URL query strings