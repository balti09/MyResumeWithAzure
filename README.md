# MyResumeWithAzure
Creating my resume with HTML and CSS, developing a CI/CD workflow with GitHub, and finally, deploying a static web app with a serverless database.  
# Front-end
The front-end is a static site with HTML, CSS, and JavaScript. The visitor counter data is via an Azure Function API call.  
# Back-end  
The back-end is an HTTP triggered Azure Functions with Cosmos DB input and output binding.  
The Function is triggered, it retrieves the CosmosDB item, add +1 to it, and saves it and returns its value to the caller.   
