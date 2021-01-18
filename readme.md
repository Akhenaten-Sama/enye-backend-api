## Author
Efunkunle Olalekan

## How to use
The endpoint(/api/rates) accepts the following request query parameter strings
1. **base**: the home currency rates to be quoted against (i.e. `CZK`)
2. **currency**: the specific exchange rates based on a comma-separated symbols parameter (i.e. `EUR,GBP,USD`).
3. some currency codes **may**  e.g (`NGN`) not be valid, so an error is returned.