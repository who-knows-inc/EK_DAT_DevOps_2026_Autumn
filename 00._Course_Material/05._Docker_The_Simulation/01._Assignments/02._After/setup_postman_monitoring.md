# Setup Postman Monitoring

Monitors will run in Postman Cloud and send you emails if the tests fail.

**Type**: Group work

---

## Limitations

Free tier only allows for 1000 requests per month. That means that you can only run 1 HTTP request hourly. 

See your monitoring usage here: https://web.postman.co/billing/add-ons/overview

And see the running monitors and amount of request used here: https://web.postman.co/usage/monitors

Another limitation exists when creating teams. Avoid creating teams to avoid running into further limitations with Postman monitoring.

---

## Create collection

You must create a collection in Postman first. A collection is a group of requests.

https://learning.postman.com/docs/getting-started/first-steps/creating-the-first-collection/

Because of the limitation mention above, you should create a collection consisting of only 1 request for the monitoring.

There are 2 ways to set up monitoring. 1 is to find Monitoring in a different place. The method below shows how to set up the monitor on the collection.

---

## Set variables

Highlight parts of the URL and right click to get the context menu. Choose `Set as variable`, give it a name and scope.

<img src="./assets_postman_monitoring/set_variable_1.png">

<img src="./assets_postman_monitoring/set_variable_2.png">

<img src="./assets_postman_monitoring/set_variable_3.png">


---

## See / edit variables

You can edit variables by clicking on the `...` icon on the upper left side (the collection drawer) and selecting edit.

Choose the `Variables` tab and edit the variables. Change the `BASE_URL` to the deployed server.

<img src="./assets_postman_monitoring/edit_variables.png">

---

## Create tests

On the request page, click on the a route, select the `Scripts` tab and `Post-response` to define what should happen after a request. 

Click on `</> Snippets` to get test code for different cases:

<img src="./assets_postman_monitoring/create_tests.png">

You can optionally watch the API test segment of the video below to learn more:

## [![Postman Beginner's course](http://img.youtube.com/vi/VywxIQ2ZXw4/0.jpg)](https://youtu.be/VywxIQ2ZXw4?t=3772)

## Write a test

In the snippets on the right side select `Status code: Code is 200`;

```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
```

---

## Run the test

Send the request and select the `Test Result` tab in the lower bottom (the response part).

<img src="./assets_postman_monitoring/run_test.png">

---

## Improve the test

```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Response body is present", function () {
  const body = pm.response.json();
  pm.expect(body).to.include("data");
  pm.expect(body.data).to.be.an("array");
});
```


---

# Monitors

---

## Enable Monitors

Click on the icon below `history` in the left side and enable Monitors.

---

## Create a Monitor

Click on `Monitors` on the left side and select `Create a Monitor`:

<img src="./assets_postman_monitoring/monitor_1.png">

Give it a name and choose  `Hour timer` and `Every hour`. Ensure that other group members will receive emails. 

<img src="./assets_postman_monitoring/monitor_2.png">

Once you create it, this is the screen you will see. You can try to run it and it will run from Postman Cloud (not your local computer):


<img src="./assets_postman_monitoring/monitor_3.png">

---

## Find the monitor

Here is how you can find the monitor under the collection:

<img src="./assets_postman_monitoring/monitor_4.png">

---

## Example monitor

This is what the monitor overview will look like after a multiple succesful runs:

<img src="./assets_postman_monitoring/monitor_5.png">

---

## What now?

Now that you have tried to create a monitor for a single test, you can consider writing duplicated tests in `Post-response` for the collection.

https://learning.postman.com/docs/tests-and-scripts/write-scripts/intro-to-scripts/

As an example, if getting a status `200` for all requests is expected then you can put the test as a `Post-response` instead of pasting it onto each endpoint.
