export const easyLevel = [
    {
        question: "Which command is used to show all databases in MongoDB?",
        option1: "SHOW DATABASES",
        option2: "SHOW DBS",
        option3: "LIST DATABASES",
        option4: "db.show()",
        ans: "SHOW DBS"
    },
    {
        question: "What type of database is MongoDB?",
        option1: "Relational",
        option2: "NoSQL",
        option3: "Graph",
        option4: "Document-based SQL",
        ans: "NoSQL"
    },
    {
        question: "Which format does MongoDB store data in?",
        option1: "XML",
        option2: "CSV",
        option3: "JSON",
        option4: "SQL",
        ans: "JSON"
    },
    {
        question: "Which MongoDB shell command is used to select a database?",
        option1: "USE db_name",
        option2: "SELECT db_name",
        option3: "CHANGE db_name",
        option4: "SET DATABASE db_name",
        ans: "USE db_name"
    },
    {
        question: "Which MongoDB method is used to insert a single document?",
        option1: "insertOne()",
        option2: "insertMany()",
        option3: "add()",
        option4: "insertSingle()",
        ans: "insertOne()"
    },
    {
        question: "Which method retrieves all documents in a MongoDB collection?",
        option1: "getAll()",
        option2: "find()",
        option3: "retrieve()",
        option4: "fetchAll()",
        ans: "find()"
    },
    {
        question: "Which method is used to delete a document in MongoDB?",
        option1: "removeOne()",
        option2: "delete()",
        option3: "deleteOne()",
        option4: "eraseOne()",
        ans: "deleteOne()"
    },
    {
        question: "Which data type is NOT supported by MongoDB?",
        option1: "String",
        option2: "Boolean",
        option3: "Integer",
        option4: "ArrayList",
        ans: "ArrayList"
    },
    {
        question: "What is the default port for MongoDB?",
        option1: "27017",
        option2: "8080",
        option3: "3306",
        option4: "5432",
        ans: "27017"
    },
    {
        question: "Which MongoDB method is used to update a document?",
        option1: "modify()",
        option2: "updateOne()",
        option3: "change()",
        option4: "updateRow()",
        ans: "updateOne()"
    },
    {
        question: "Which MongoDB method is used to insert multiple documents at once?",
        option1: "insertAll()",
        option2: "insertMany()",
        option3: "bulkInsert()",
        option4: "insertBatch()",
        ans: "insertMany()"
    },
    {
        question: "Which MongoDB command is used to show all collections in a database?",
        option1: "SHOW COLLECTIONS",
        option2: "db.collections()",
        option3: "LIST COLLECTIONS",
        option4: "SHOW ALL COLLECTIONS",
        ans: "SHOW COLLECTIONS"
    },
    {
        question: "Which method is used to sort query results in MongoDB?",
        option1: "sort()",
        option2: "orderBy()",
        option3: "arrange()",
        option4: "order()",
        ans: "sort()"
    },
    {
        question: "Which of the following is true about MongoDB indexes?",
        option1: "Indexes slow down query performance",
        option2: "Indexes speed up queries",
        option3: "MongoDB does not support indexes",
        option4: "Indexes are used for deleting data",
        ans: "Indexes speed up queries"
    },
    {
        question: "What is the default storage engine for MongoDB?",
        option1: "MyISAM",
        option2: "InnoDB",
        option3: "WiredTiger",
        option4: "RocksDB",
        ans: "WiredTiger"
    },
    {
        question: "How is data organized in MongoDB?",
        option1: "Tables and Rows",
        option2: "Documents and Collections",
        option3: "Keys and Values",
        option4: "Classes and Objects",
        ans: "Documents and Collections"
    },
    {
        question: "Which of the following best describes MongoDB?",
        option1: "A relational database",
        option2: "A document-oriented NoSQL database",
        option3: "A key-value store",
        option4: "A graph database",
        ans: "A document-oriented NoSQL database"
    },
    {
        question: "Which method is used to delete multiple documents in MongoDB?",
        option1: "deleteMany()",
        option2: "removeAll()",
        option3: "drop()",
        option4: "erase()",
        ans: "deleteMany()"
    },
    {
        question: "Which MongoDB command drops an entire collection?",
        option1: "DROP COLLECTION collection_name",
        option2: "db.collection_name.drop()",
        option3: "DELETE COLLECTION collection_name",
        option4: "REMOVE collection_name",
        ans: "db.collection_name.drop()"
    },
    {
        question: "Which MongoDB command removes an entire database?",
        option1: "DROP DATABASE db_name",
        option2: "db.dropDatabase()",
        option3: "DELETE DATABASE db_name",
        option4: "REMOVE db_name",
        ans: "db.dropDatabase()"
    }
];

export const mediumLevel = [
    {
        question: "What happens if you insert a document without an `_id` field in MongoDB?",
        option1: "Insertion fails",
        option2: "MongoDB generates a unique `_id` automatically",
        option3: "The document is inserted with a null `_id`",
        option4: "It is stored without an `_id`",
        ans: "MongoDB generates a unique `_id` automatically"
    },
    {
        question: "Which method is used to check if a field exists in a MongoDB document?",
        option1: "db.collection.find({ field: { $exists: true } })",
        option2: "db.collection.hasField('field')",
        option3: "db.collection.exists('field')",
        option4: "db.collection.find().exists('field')",
        ans: "db.collection.find({ field: { $exists: true } })"
    },
    {
        question: "Which of the following is NOT a valid aggregation pipeline stage?",
        option1: "$match",
        option2: "$filter",
        option3: "$group",
        option4: "$project",
        ans: "$filter"
    },
    {
        question: "How can you retrieve only a subset of fields from a MongoDB document?",
        option1: "Using the `$slice` operator",
        option2: "Using the `select()` function",
        option3: "Using projection in `find()`",
        option4: "Using `db.collection.fields()`",
        ans: "Using projection in `find()`"
    },
    {
        question: "Which command is used to create an index in MongoDB?",
        option1: "db.collection.ensureIndex({ field: 1 })",
        option2: "db.collection.createIndex({ field: 1 })",
        option3: "db.collection.index({ field: 1 })",
        option4: "db.collection.addIndex({ field: 1 })",
        ans: "db.collection.createIndex({ field: 1 })"
    },
    {
        question: "What does the `$unwind` stage in an aggregation pipeline do?",
        option1: "Joins two collections",
        option2: "Splits an array field into multiple documents",
        option3: "Sorts documents based on a field",
        option4: "Groups documents by a field",
        ans: "Splits an array field into multiple documents"
    },
    {
        question: "Which MongoDB operator is used for case-insensitive text search?",
        option1: "$search",
        option2: "$regex",
        option3: "$match",
        option4: "$text",
        ans: "$text"
    },
    {
        question: "What is the purpose of the `$lookup` operator in MongoDB?",
        option1: "To perform left outer joins between collections",
        option2: "To filter documents in a collection",
        option3: "To update multiple documents",
        option4: "To sort documents in ascending order",
        ans: "To perform left outer joins between collections"
    },
    {
        question: "Which of the following is a valid MongoDB data type?",
        option1: "Date",
        option2: "Timestamp",
        option3: "NumberDecimal",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "How do you check the indexes on a collection?",
        option1: "db.collection.listIndexes()",
        option2: "db.collection.getIndexes()",
        option3: "db.collection.indexes()",
        option4: "db.collection.showIndexes()",
        ans: "db.collection.getIndexes()"
    },
    {
        question: "Which MongoDB method removes duplicate values from an array field?",
        option1: "$distinct",
        option2: "$unique",
        option3: "$reduce",
        option4: "$filter",
        ans: "$distinct"
    },
    {
        question: "Which of the following can improve MongoDB query performance?",
        option1: "Indexes",
        option2: "Sharding",
        option3: "Replication",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "How do you limit query results in MongoDB?",
        option1: "Using `skip()`",
        option2: "Using `limit()`",
        option3: "Using `$maxResults`",
        option4: "Using `$restrict`",
        ans: "Using `limit()`"
    },
    {
        question: "Which MongoDB function is used to check the database version?",
        option1: "db.version()",
        option2: "mongo --version",
        option3: "db.getVersion()",
        option4: "db.showVersion()",
        ans: "db.version()"
    },
    {
        question: "Which storage engine does MongoDB use by default?",
        option1: "RocksDB",
        option2: "InnoDB",
        option3: "WiredTiger",
        option4: "MyISAM",
        ans: "WiredTiger"
    },
    {
        question: "What does the `$set` operator do in MongoDB?",
        option1: "Deletes a field",
        option2: "Increments a field",
        option3: "Updates or adds a field",
        option4: "Filters documents",
        ans: "Updates or adds a field"
    },
    {
        question: "Which MongoDB feature allows horizontal scaling?",
        option1: "Replication",
        option2: "Sharding",
        option3: "Indexes",
        option4: "Caching",
        ans: "Sharding"
    },
    {
        question: "Which operator is used to find documents that contain a specific value in an array field?",
        option1: "$contains",
        option2: "$array",
        option3: "$in",
        option4: "$find",
        ans: "$in"
    },
    {
        question: "Which of the following statements about MongoDB transactions is true?",
        option1: "Transactions are supported across multiple documents",
        option2: "Transactions only work on a single document",
        option3: "MongoDB does not support transactions",
        option4: "Transactions are automatically applied to all operations",
        ans: "Transactions are supported across multiple documents"
    },
    {
        question: "What is the purpose of MongoDB's capped collections?",
        option1: "To automatically delete old documents",
        option2: "To limit the number of documents stored",
        option3: "To ensure fast writes with a fixed-size collection",
        option4: "All of the above",
        ans: "All of the above"
    },
    {
        question: "How does MongoDB ensure high availability?",
        option1: "By using primary and secondary replication",
        option2: "By sharding data",
        option3: "By using backup servers",
        option4: "By storing data redundantly on a single node",
        ans: "By using primary and secondary replication"
    },
    {
        question: "Which operator is used to increase a numerical field's value?",
        option1: "$inc",
        option2: "$add",
        option3: "$sum",
        option4: "$increase",
        ans: "$inc"
    },
    {
        question: "Which command drops a MongoDB collection?",
        option1: "db.collection.remove()",
        option2: "db.collection.delete()",
        option3: "db.collection.drop()",
        option4: "db.collection.destroy()",
        ans: "db.collection.drop()"
    }
];

export const hardLevel = [
    {
        question: "What is the maximum size of a MongoDB document?",
        option1: "4MB",
        option2: "16MB",
        option3: "32MB",
        option4: "64MB",
        ans: "16MB"
    },
    {
        question: "Which of the following consistency models does MongoDB use?",
        option1: "Strict Consistency",
        option2: "Eventual Consistency",
        option3: "Immediate Consistency",
        option4: "None of the above",
        ans: "Eventual Consistency"
    },
    {
        question: "How does MongoDB handle atomicity?",
        option1: "Atomicity is supported only at the document level",
        option2: "MongoDB does not support atomicity",
        option3: "Atomicity is supported across collections",
        option4: "MongoDB uses transactions for full atomicity",
        ans: "Atomicity is supported only at the document level"
    },
    {
        question: "Which MongoDB command repairs a damaged database?",
        option1: "db.repair()",
        option2: "db.fix()",
        option3: "mongod --repair",
        option4: "db.repairDatabase()",
        ans: "mongod --repair"
    },
    {
        question: "How does MongoDB distribute data across multiple nodes?",
        option1: "Replication",
        option2: "Sharding",
        option3: "Clustering",
        option4: "Partitioning",
        ans: "Sharding"
    },
    {
        question: "Which aggregation operator is used for performing complex multi-stage transformations?",
        option1: "$project",
        option2: "$facet",
        option3: "$match",
        option4: "$limit",
        ans: "$facet"
    },
    {
        question: "What happens when a primary node in a MongoDB replica set fails?",
        option1: "The database becomes unavailable",
        option2: "A new primary is elected automatically",
        option3: "All operations stop until the primary recovers",
        option4: "The data is lost permanently",
        ans: "A new primary is elected automatically"
    },
    {
        question: "Which MongoDB feature ensures that a collection maintains a fixed size?",
        option1: "Time-to-live indexes",
        option2: "Capped collections",
        option3: "Sharding",
        option4: "Write concerns",
        ans: "Capped collections"
    },
    {
        question: "What is the default storage engine used by MongoDB?",
        option1: "WiredTiger",
        option2: "InnoDB",
        option3: "RocksDB",
        option4: "MyISAM",
        ans: "WiredTiger"
    },
    {
        question: "How does MongoDB handle write conflicts in a sharded cluster?",
        option1: "Using distributed locks",
        option2: "By retrying the write operation automatically",
        option3: "By allowing the latest write to override previous ones",
        option4: "By rejecting writes that cause conflicts",
        ans: "Using distributed locks"
    },
    {
        question: "What is the primary role of an arbiter in a MongoDB replica set?",
        option1: "To store additional copies of data",
        option2: "To break ties in elections",
        option3: "To increase read performance",
        option4: "To improve indexing",
        ans: "To break ties in elections"
    },
    {
        question: "Which command enables or disables profiling in MongoDB?",
        option1: "db.setProfilingLevel()",
        option2: "db.enableProfiling()",
        option3: "db.profile()",
        option4: "db.startProfiling()",
        ans: "db.setProfilingLevel()"
    },
    {
        question: "Which method is used to perform a two-phase commit in MongoDB transactions?",
        option1: "startTransaction() and commitTransaction()",
        option2: "begin() and commit()",
        option3: "startCommit() and finalizeCommit()",
        option4: "transactionStart() and transactionCommit()",
        ans: "startTransaction() and commitTransaction()"
    },
    {
        question: "Which operator allows performing lookups between sharded collections?",
        option1: "$merge",
        option2: "$graphLookup",
        option3: "$lookup",
        option4: "$unionWith",
        ans: "$lookup"
    },
    {
        question: "What is the key advantage of TTL (Time-to-Live) indexes in MongoDB?",
        option1: "They automatically delete expired documents",
        option2: "They improve query performance",
        option3: "They reduce storage costs",
        option4: "They prevent duplicate entries",
        ans: "They automatically delete expired documents"
    },
    {
        question: "Which tool is used for restoring a MongoDB database from a backup?",
        option1: "mongodump",
        option2: "mongorestore",
        option3: "mongoimport",
        option4: "mongobackup",
        ans: "mongorestore"
    },
    {
        question: "Which command is used to check the oplog status in a MongoDB replica set?",
        option1: "rs.status()",
        option2: "rs.oplogStatus()",
        option3: "rs.printReplicationInfo()",
        option4: "db.oplog.find()",
        ans: "rs.printReplicationInfo()"
    },
    {
        question: "Which type of index can be used to improve performance for wildcard text searches?",
        option1: "Geospatial index",
        option2: "Compound index",
        option3: "Text index",
        option4: "Hashed index",
        ans: "Text index"
    },
    {
        question: "Which MongoDB operator is used for merging documents from multiple collections?",
        option1: "$unionWith",
        option2: "$merge",
        option3: "$lookup",
        option4: "$facet",
        ans: "$unionWith"
    },
    {
        question: "Which MongoDB shell command forces an election in a replica set?",
        option1: "rs.reconfig()",
        option2: "rs.stepDown()",
        option3: "rs.initiate()",
        option4: "rs.electPrimary()",
        ans: "rs.stepDown()"
    }
];
