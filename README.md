# squadRunAssignment 

Here is what I should be able to do with the library you write:

1) Search "Person" on Pipedrive given name or ID. 
2) Register URLs on Pipedrive for receiving a webhook hit whenever new Persons are created or updated
(i) Given the request data from the webhook hit, return the details of the Person, with a flag that indicates if 
the Person was created or updated.
(ii) Create a custom field for a "Person" in Pipedrive by the name of "SV Stop" and configure it to take a "Yes" 
or a "No" value. Now, updates to this field will also be sent via webhook. Given the request data from the webhook h
it, we also want to know if this field is a True or False.
3) Update a Person on Pipedrive given it's ID
4) Add a "Note" for the Person
