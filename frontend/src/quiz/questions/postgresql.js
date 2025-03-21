export const easyLevel = [
    {
        question: "What is PostgreSQL?",
        option1: "A relational database management system",
        option2: "A programming language",
        option3: "A front-end framework",
        option4: "An operating system",
        ans: "A relational database management system"
    },
    {
        question: "Which command is used to create a new database in PostgreSQL?",
        option1: "CREATE DATABASE dbname;",
        option2: "NEW DATABASE dbname;",
        option3: "MAKE DATABASE dbname;",
        option4: "ADD DATABASE dbname;",
        ans: "CREATE DATABASE dbname;"
    },
    {
        question: "Which PostgreSQL command is used to list all databases?",
        option1: "SHOW DATABASES;",
        option2: "\\l",
        option3: "LIST DATABASES;",
        option4: "DATABASES LIST;",
        ans: "\\l"
    },
    {
        question: "What is the default port number for PostgreSQL?",
        option1: "1433",
        option2: "3306",
        option3: "5432",
        option4: "1521",
        ans: "5432"
    },
    {
        question: "Which command is used to switch to a different database?",
        option1: "USE dbname;",
        option2: "CHANGE DATABASE dbname;",
        option3: "SELECT dbname;",
        option4: "\\c dbname",
        ans: "\\c dbname"
    },
    {
        question: "How do you list all tables in a PostgreSQL database?",
        option1: "SHOW TABLES;",
        option2: "\\dt",
        option3: "LIST TABLES;",
        option4: "DISPLAY TABLES;",
        ans: "\\dt"
    },
    {
        question: "Which data type is used to store large text in PostgreSQL?",
        option1: "VARCHAR",
        option2: "TEXT",
        option3: "STRING",
        option4: "CHAR",
        ans: "TEXT"
    },
    {
        question: "How do you delete a database in PostgreSQL?",
        option1: "DROP DATABASE dbname;",
        option2: "REMOVE DATABASE dbname;",
        option3: "DELETE DATABASE dbname;",
        option4: "DESTROY DATABASE dbname;",
        ans: "DROP DATABASE dbname;"
    },
    {
        question: "Which statement is used to insert data into a PostgreSQL table?",
        option1: "ADD INTO table_name VALUES (...);",
        option2: "INSERT INTO table_name VALUES (...);",
        option3: "UPDATE table_name VALUES (...);",
        option4: "MODIFY table_name VALUES (...);",
        ans: "INSERT INTO table_name VALUES (...);"
    },
    {
        question: "Which command is used to remove all records from a table without deleting the table itself?",
        option1: "DELETE FROM table_name;",
        option2: "REMOVE ALL table_name;",
        option3: "TRUNCATE table_name;",
        option4: "CLEAR table_name;",
        ans: "TRUNCATE table_name;"
    },
    {
        question: "How do you add a new column to an existing table?",
        option1: "MODIFY TABLE table_name ADD COLUMN column_name datatype;",
        option2: "ADD COLUMN column_name datatype TO table_name;",
        option3: "ALTER TABLE table_name ADD COLUMN column_name datatype;",
        option4: "UPDATE TABLE table_name ADD COLUMN column_name datatype;",
        ans: "ALTER TABLE table_name ADD COLUMN column_name datatype;"
    },
    {
        question: "What is the purpose of the `WHERE` clause in SQL?",
        option1: "To limit the number of rows returned",
        option2: "To sort the rows",
        option3: "To filter records based on a condition",
        option4: "To rename a column",
        ans: "To filter records based on a condition"
    },
    {
        question: "Which SQL clause is used to sort query results?",
        option1: "SORT BY",
        option2: "ORDER BY",
        option3: "GROUP BY",
        option4: "ARRANGE BY",
        ans: "ORDER BY"
    },
    {
        question: "Which function returns the total number of rows in a table?",
        option1: "COUNT()",
        option2: "SUM()",
        option3: "TOTAL()",
        option4: "ROWS()",
        ans: "COUNT()"
    },
    {
        question: "What does `PRIMARY KEY` do in PostgreSQL?",
        option1: "Allows duplicate values in a column",
        option2: "Ensures each row in a column is unique and not NULL",
        option3: "Links two tables together",
        option4: "Speeds up search queries",
        ans: "Ensures each row in a column is unique and not NULL"
    },
    {
        question: "Which clause groups records with similar values in a specified column?",
        option1: "GROUP BY",
        option2: "SORT BY",
        option3: "ORDER BY",
        option4: "FILTER BY",
        ans: "GROUP BY"
    },
    {
        question: "Which keyword is used to retrieve unique values in PostgreSQL?",
        option1: "UNIQUE",
        option2: "DISTINCT",
        option3: "FILTER",
        option4: "SEPARATE",
        ans: "DISTINCT"
    },
    {
        question: "Which command is used to delete specific rows from a table?",
        option1: "REMOVE FROM table_name WHERE condition;",
        option2: "DELETE FROM table_name WHERE condition;",
        option3: "DROP FROM table_name WHERE condition;",
        option4: "CLEAR FROM table_name WHERE condition;",
        ans: "DELETE FROM table_name WHERE condition;"
    },
    {
        question: "Which PostgreSQL statement is used to modify existing records in a table?",
        option1: "CHANGE table_name SET column=value WHERE condition;",
        option2: "MODIFY table_name SET column=value WHERE condition;",
        option3: "UPDATE table_name SET column=value WHERE condition;",
        option4: "ALTER table_name SET column=value WHERE condition;",
        ans: "UPDATE table_name SET column=value WHERE condition;"
    },
    {
        question: "Which function returns the highest value in a column?",
        option1: "MAX()",
        option2: "HIGH()",
        option3: "TOP()",
        option4: "GREATEST()",
        ans: "MAX()"
    }
];

export const mediumLevel = [
    {
        question: "Which command is used to grant all privileges on a database to a user?",
        option1: "GRANT ALL PRIVILEGES ON DATABASE dbname TO username;",
        option2: "ALLOW ALL ON DATABASE dbname TO username;",
        option3: "PERMIT ALL ON DATABASE dbname TO username;",
        option4: "GIVE ALL PRIVILEGES TO username;",
        ans: "GRANT ALL PRIVILEGES ON DATABASE dbname TO username;"
    },
    {
        question: "Which function is used to return the current timestamp in PostgreSQL?",
        option1: "NOW()",
        option2: "CURRENT_TIME()",
        option3: "GETDATE()",
        option4: "CURRENT_TIMESTAMP()",
        ans: "CURRENT_TIMESTAMP()"
    },
    {
        question: "What is the purpose of the `HAVING` clause in SQL?",
        option1: "To filter records after `GROUP BY` has been applied",
        option2: "To limit the number of rows returned",
        option3: "To sort results in descending order",
        option4: "To filter records before grouping",
        ans: "To filter records after `GROUP BY` has been applied"
    },
    {
        question: "Which data type is best suited for storing JSON data in PostgreSQL?",
        option1: "VARCHAR",
        option2: "JSONB",
        option3: "TEXT",
        option4: "JSON",
        ans: "JSONB"
    },
    {
        question: "How can you retrieve a specific column from a JSONB field?",
        option1: "Using the -> operator",
        option2: "Using the # operator",
        option3: "Using the ** operator",
        option4: "Using the @> operator",
        ans: "Using the -> operator"
    },
    {
        question: "Which statement is used to create an index on a table?",
        option1: "CREATE INDEX index_name ON table_name (column_name);",
        option2: "ADD INDEX index_name ON table_name (column_name);",
        option3: "MAKE INDEX index_name ON table_name (column_name);",
        option4: "NEW INDEX index_name ON table_name (column_name);",
        ans: "CREATE INDEX index_name ON table_name (column_name);"
    },
    {
        question: "Which of the following statements is true about UNIQUE constraints in PostgreSQL?",
        option1: "A UNIQUE constraint allows duplicate NULL values",
        option2: "A UNIQUE constraint prevents NULL values",
        option3: "A UNIQUE constraint ensures all values are distinct, including NULLs",
        option4: "A UNIQUE constraint can only be applied to numeric columns",
        ans: "A UNIQUE constraint allows duplicate NULL values"
    },
    {
        question: "Which PostgreSQL feature is used for full-text search?",
        option1: "TSVECTOR and TSQUERY",
        option2: "TEXTMATCH",
        option3: "FULLTEXTSEARCH",
        option4: "SEARCH_INDEX",
        ans: "TSVECTOR and TSQUERY"
    },
    {
        question: "Which JOIN operation retrieves only matching records from both tables?",
        option1: "LEFT JOIN",
        option2: "RIGHT JOIN",
        option3: "INNER JOIN",
        option4: "FULL JOIN",
        ans: "INNER JOIN"
    },
    {
        question: "How do you change the owner of a table?",
        option1: "ALTER TABLE table_name OWNER TO new_owner;",
        option2: "MODIFY TABLE table_name OWNER new_owner;",
        option3: "UPDATE OWNER OF table_name TO new_owner;",
        option4: "REASSIGN TABLE table_name TO new_owner;",
        ans: "ALTER TABLE table_name OWNER TO new_owner;"
    },
    {
        question: "Which function can be used to get the number of rows returned by a query?",
        option1: "ROW_COUNT()",
        option2: "COUNT()",
        option3: "LENGTH()",
        option4: "SIZE()",
        ans: "COUNT()"
    },
    {
        question: "Which clause is used to filter groups created by `GROUP BY`?",
        option1: "WHERE",
        option2: "HAVING",
        option3: "FILTER",
        option4: "SORT",
        ans: "HAVING"
    },
    {
        question: "How do you retrieve the first 10 rows from a table?",
        option1: "SELECT * FROM table_name LIMIT 10;",
        option2: "SELECT FIRST 10 * FROM table_name;",
        option3: "SELECT * FROM table_name TOP 10;",
        option4: "SELECT * FROM table_name FETCH 10;",
        ans: "SELECT * FROM table_name LIMIT 10;"
    },
    {
        question: "Which PostgreSQL command is used to remove duplicates from a query result?",
        option1: "UNIQUE",
        option2: "REMOVE DUPLICATES",
        option3: "DISTINCT",
        option4: "FILTER",
        ans: "DISTINCT"
    },
    {
        question: "Which function is used to generate a random number in PostgreSQL?",
        option1: "RANDOM()",
        option2: "RAND()",
        option3: "NEWID()",
        option4: "GENERATE_RANDOM()",
        ans: "RANDOM()"
    },
    {
        question: "Which aggregate function returns the total sum of a numeric column?",
        option1: "SUM()",
        option2: "COUNT()",
        option3: "TOTAL()",
        option4: "AVG()",
        ans: "SUM()"
    },
    {
        question: "Which SQL keyword is used to remove an existing column from a table?",
        option1: "DELETE COLUMN column_name;",
        option2: "REMOVE COLUMN column_name;",
        option3: "ALTER TABLE table_name DROP COLUMN column_name;",
        option4: "TRUNCATE COLUMN column_name;",
        ans: "ALTER TABLE table_name DROP COLUMN column_name;"
    },
    {
        question: "Which clause is used to combine the results of two SELECT statements while removing duplicates?",
        option1: "JOIN",
        option2: "UNION",
        option3: "MERGE",
        option4: "COMBINE",
        ans: "UNION"
    },
    {
        question: "Which PostgreSQL command is used to restart the auto-increment sequence of a table?",
        option1: "ALTER SEQUENCE sequence_name RESTART WITH 1;",
        option2: "RESET AUTO_INCREMENT table_name;",
        option3: "SET SEQUENCE sequence_name START WITH 1;",
        option4: "AUTO_INCREMENT RESET sequence_name;",
        ans: "ALTER SEQUENCE sequence_name RESTART WITH 1;"
    },
    {
        question: "Which statement is used to delete an existing index in PostgreSQL?",
        option1: "REMOVE INDEX index_name;",
        option2: "DROP INDEX index_name;",
        option3: "DELETE INDEX index_name;",
        option4: "ALTER TABLE DROP INDEX index_name;",
        ans: "DROP INDEX index_name;"
    }
];

export const hardLevel = [
    {
        question: "Which command can be used to rebuild all indexes on a table in PostgreSQL?",
        option1: "ALTER INDEX REBUILD ON table_name;",
        option2: "REINDEX TABLE table_name;",
        option3: "RESET INDEXES ON table_name;",
        option4: "REFRESH INDEX table_name;",
        ans: "REINDEX TABLE table_name;"
    },
    {
        question: "Which of the following is true about MVCC (Multi-Version Concurrency Control) in PostgreSQL?",
        option1: "It locks the entire table for writing",
        option2: "It allows multiple versions of a row to exist simultaneously",
        option3: "It prevents concurrent transactions from executing",
        option4: "It does not support concurrent transactions",
        ans: "It allows multiple versions of a row to exist simultaneously"
    },
    {
        question: "Which PostgreSQL feature helps maintain historical data changes?",
        option1: "Audit Triggers",
        option2: "Time-Travel Queries",
        option3: "Logical Replication",
        option4: "Temporal Tables",
        ans: "Temporal Tables"
    },
    {
        question: "What is the purpose of the `pg_stat_statements` extension in PostgreSQL?",
        option1: "To log all executed SQL queries",
        option2: "To track the performance of executed queries",
        option3: "To clean up outdated query plans",
        option4: "To backup the database schema",
        ans: "To track the performance of executed queries"
    },
    {
        question: "Which command is used to force a vacuum process on a PostgreSQL table?",
        option1: "VACUUM FULL table_name;",
        option2: "FORCE VACUUM table_name;",
        option3: "CLEAN TABLE table_name;",
        option4: "REFRESH VACUUM table_name;",
        ans: "VACUUM FULL table_name;"
    },
    {
        question: "Which isolation level ensures that a transaction sees only committed data and prevents dirty reads?",
        option1: "READ UNCOMMITTED",
        option2: "READ COMMITTED",
        option3: "SERIALIZABLE",
        option4: "REPEATABLE READ",
        ans: "READ COMMITTED"
    },
    {
        question: "Which statement correctly creates a partitioned table in PostgreSQL?",
        option1: "CREATE PARTITIONED TABLE sales PARTITION BY RANGE (date);",
        option2: "CREATE TABLE sales PARTITION BY RANGE (date);",
        option3: "CREATE TABLE sales AS PARTITIONED ON date;",
        option4: "PARTITION TABLE sales BY RANGE (date);",
        ans: "CREATE TABLE sales PARTITION BY RANGE (date);"
    },
    {
        question: "What is the purpose of the `pgpool-II` tool in PostgreSQL?",
        option1: "It provides connection pooling and load balancing",
        option2: "It performs automatic database backups",
        option3: "It acts as a PostgreSQL query optimizer",
        option4: "It is used for distributed data processing",
        ans: "It provides connection pooling and load balancing"
    },
    {
        question: "Which statement about `WITH RECURSIVE` in PostgreSQL is true?",
        option1: "It is used to perform recursive Common Table Expressions (CTEs)",
        option2: "It allows recursive transactions to rollback automatically",
        option3: "It optimizes queries by caching recursive joins",
        option4: "It enables real-time query execution",
        ans: "It is used to perform recursive Common Table Expressions (CTEs)"
    },
    {
        question: "Which PostgreSQL function is used to check for overlapping ranges?",
        option1: "range_intersects()",
        option2: "&& (overlaps operator)",
        option3: "range_conflict()",
        option4: "overlap_check()",
        ans: "&& (overlaps operator)"
    },
    {
        question: "Which statement is true about PostgreSQL TOAST (The Oversized-Attribute Storage Technique)?",
        option1: "It stores large data types externally to reduce table size",
        option2: "It compresses all string data automatically",
        option3: "It is used only for tables larger than 1GB",
        option4: "It improves database indexing speed",
        ans: "It stores large data types externally to reduce table size"
    },
    {
        question: "Which PostgreSQL command is used to switch to a different database?",
        option1: "USE database_name;",
        option2: "CONNECT TO database_name;",
        option3: "\\c database_name;",
        option4: "CHANGE DATABASE database_name;",
        ans: "\\c database_name;"
    },
    {
        question: "Which PostgreSQL feature allows real-time streaming replication?",
        option1: "WAL Archiving",
        option2: "Logical Replication",
        option3: "Streaming Replication",
        option4: "Synchronous Commit",
        ans: "Streaming Replication"
    },
    {
        question: "How do you efficiently delete all rows from a large table without affecting the table structure?",
        option1: "DELETE FROM table_name;",
        option2: "DROP TABLE table_name;",
        option3: "TRUNCATE TABLE table_name;",
        option4: "REMOVE ALL FROM table_name;",
        ans: "TRUNCATE TABLE table_name;"
    },
    {
        question: "Which PostgreSQL function is used to generate universally unique identifiers (UUIDs)?",
        option1: "uuid_generate_v4()",
        option2: "new_uuid()",
        option3: "unique_id()",
        option4: "generate_uuid()",
        ans: "uuid_generate_v4()"
    }
];
