# smartclient-node
## Server side implementation for [SmartClient](http://www.smartclient.com/)

### Installation instructions
- Create empty directory
- Initialize package.json with `npm init`
- Add [smartclient-node](https://github.com/isomorphic-software/smartclient-node.git) to your Node.js project.
```
npm install -S git://github.com/isomorphic-software/smartclient-node.git
```
Installation process will ask following questions - accept defaults:
```
Destination directory [/home/user/smartclient-test/]:
Download SmartClient evaluation runtime (WARN: overwrites existing web/isomorphic directory)? [yes]:
Install sample (WARN: overwrites existing index.html file)? [yes]:
```
Downloading [SmartClient runtime](http://www.smartclient.com/product) takes some time - be patient.

Instalation process can be repeated by running installed script `./node_modules/.bin/smartclient-install`

### Starting server
```
./node_modules/.bin/smartclient-server
```

### Configuration
Installation process creates configuration file [conf/config.properties](conf/config.properties).
Update this file with your values
Server should be restarted for changes to take effect.

### Current status
- Supports RPC calls without method arguments
    - Transactions (per request)
- Supports SQL data sources for MySQL and PostgreSQL
    - CRUD operations
    - Transactions (per request)
    - Paging
    - Sorting
    - Simple filtering
    - Filtering with Advanced criteria
- Supports JSON data source: data is stored in file in JSON format
    - CRUD operations
    - NO paging \- always returns whole dataset
    - NO sorting
    - NO filtering \- returned records are in same order as in file

### TODO
- Finish REST request processing
- Add data source for MongoDB
