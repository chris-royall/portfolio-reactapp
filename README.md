# Portfolio
Welcome to my Portfolio project! This repository showcases my skills in front-end development and AWS cloud services by implementing a functional web application with advanced logging, email automation, and data retention strategies.

- [Technology Stack](#technology-stack)
- [Contact Form Email](#contact-form-email)
  - [Contact Form Workflow](#contact-form-workflow)
  - [Contact Form API](#contact-form-api)
- [Logging](#logging)
  - [Contact Form Logging](#contact-form-logging)
  - [Link Selection API](#link-selection-api)
  - [Link Selection Logging](#link-selection-logging)
  - [Kinesis Delivery Streams](#kinesis-delivery-streams)



## Technology Stack

This project leverages the following technologies:

### Frontend
- **Languages & Frameworks:**
  - Angular: HTML, CSS, TypeScript

### Cloud Services (AWS)
- **Hosting & Routing:** AWS Amplify, Route 53
- **Backend & APIs:**
  - **Language:** Python (used in AWS Lambda functions)
  - **Services:** API Gateway, Lambda
- **Email Services:** SES (Simple Email Service)
- **Monitoring & Analytics:** CloudWatch, Kinesis
- **Storage:** S3 (Simple Storage Service)

Deployed at: [www.chrisroyall.com](https://www.chrisroyall.com)

![Infrastructure Diagram](/assets/images/portfolio-infrastructure.png)



## Contact Form Email

### Contact Form Workflow

1. User fills out all required fields and submits the form.
2. Data is sent to the Contact Form API via a `POST` request.
3. The API triggers a Lambda function that:
   - Validates the input.
   - Sends an email using AWS SES.
   - Logs the submission in CloudWatch.


### Contact Form API

URL</br>
`/ContactForm`

Method</br>
`POST`

Body</br>
```
{
  "name": "John Doe",
  "email": "john.doe@email.com",
  "message": "This is a message."
}
```

| Status Code | Response                        |
|-------------|---------------------------------|
| 200         | `{ "message": "Email sent successfully" }` |
| 500         | `{ "message": "Error sending email" }`     |



## Logging
- Logs are recorded in CloudWatch for:
  - Contact form submissions.
  - Link selection events.
- Logs are retained for 30 days in CloudWatch.
- A subscription filter streams logs to S3 via Kinesis Firehose for long-term storage in Glacier.
- Logs are automatically deleted after 365 days.


### Contact Form Logging

Log Group</br>
`/ContactForm`

Data received with timestamp</br>
```
const { name, email, message } = JSON.parse(event.body);
console.log(new Date().toISOString(), "Event received");
console.log('Event:', JSON.stringify(event, null, 2));
```

Send email via SES</br>
```
console.log("Sending email");
await ses.sendEmail(params).promise();
```

Catch error</br>
```
catch (error) {
    console.error("Error in Lambda:", error);
```

Lambda completed</br>
```
console.log("Lambda completed");
```


### Link Selection API

URL</br>
`/LinkSelection`

Method</br>
`POST`

Body</br>
```
{ buttonClicked: "Sample Button" }
```

#### API Responses
| Status Code | Response                        |
|-------------|---------------------------------|
| 200         | `{ "message": "Log Recorded" }` |
| 500         | `{ "message": "Internal Server Error" }`     |



### Link Selection Logging

Log Group</br>
`/LinkSelection`

Data logged with timestamp</br>
```
const logParams = {
  logGroupName,
  logStreamName,
  logEvents: [
    {
      timestamp: new Date().getTime(),
      message: `Link Selected: ${buttonClicked}`
    },
  ],
};
```

Catch error</br>
```
catch (error) {
    console.error("Error in Lambda:", error);
```

Lambda completed</br>
```
console.log("Lambda completed");
```

### Kinesis Delivery Streams

Contact Form</br>
```
"LogGroup": "/aws/lambda/ContactForm"
"Subscription": "contactform-applicationlogs-exporttos3"
"DeliveryStream": "contactform-applicationlogs"
"Bucket": "contactform-applicationlogs"
  "Expiration": { "Days": 365" }
  "Transitions": [{ "Days": 0, "StorageClass": "DEEP_ARCHIVE" }]
```

Link Selection</br>
```
"LogGroup": "/aws/lambda/LinkSelection"
"Subcription": "linkselection-applicationlogs-exporttos3"
"DeliveryStream": "linkselection-applicationlogs"
"Bucket": "linkselection-applicationlogs"
  "Expiration": { "Days": 365" }
  "Transitions": [{ "Days": 0, "StorageClass": "DEEP_ARCHIVE" }]
```
