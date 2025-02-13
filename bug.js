```javascript
//Incorrect usage of $inc operator in update query
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
```