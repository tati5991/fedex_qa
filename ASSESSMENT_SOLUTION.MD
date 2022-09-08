## Approach
For writing automation scripts I chose mocha and cypress (describe and IT block).

I added some data-test ids in the solution to be easy to test.

## Reporting
For reporting I choose cypress dashboard by running a command `e2e-dashboard` after test run, it is published to cypress dashboard as an example of runs: 
https://dashboard.cypress.io/projects/2amwfo/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

## Defects detected
* When user clears data from 'Search', search results are not cleared.

