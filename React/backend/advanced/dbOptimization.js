// Database optimization example
// This file contains code examples and techniques for optimizing database performance
// including indexing strategies, query optimization, and schema design tips

// Example: Adding an index to a collection
db.collectionName.createIndex({ fieldName: 1 })

// Example: Query optimization using projection
db.collectionName.find(
  { fieldName: value },
  { desiredField1: 1, desiredField2: 1 }
)

// Example: Schema design tip - embedding vs referencing
// Consider embedding related data within a single document for better performance
// when you have a one-to-few relationship
{
  _id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  }
}

// Example: Schema design tip - using normalized references
// Use references for one-to-many or many-to-many relationships to avoid data duplication
{
  _id: 1,
  productName: "Widget",
  categoryId: ObjectId("...")
}

// Remember to analyze your queries and use the database's explain plan feature
// to identify potential bottlenecks and optimize accordingly

// dbOptimization.js
// Example database optimization (MongoDB index)
// In a real app, use mongoose or native driver
// Example: db.collection('users').createIndex({ email: 1 }, { unique: true })

function optimizeDatabase(db) {
  db.collection('users').createIndex({ email: 1 }, { unique: true });
}

module.exports = optimizeDatabase;