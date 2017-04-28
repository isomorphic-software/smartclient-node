"use strict";

const RPCResponse = require("smartclient-rpc").RPCResponse;

/**
 * Class for RPC calls testing.
 * <pre>
 * isc.RPCManager.sendRequest({
 *     data: {
 *         className: "/testing/RPCTest",
 *         methodName: "executeWithResponse"
 *     },
 * //    transport: "hiddenFrame",
 *     transport: "xmlHttpRequest",
 *     callback: function(rpcResponse, data, rpcRequest) {
 *         isc.logWarn("Response:\n\n" + JSON.stringify(data));
 *     }
 * });
 * </pre>
 */
class RPCTest {

    constructor() {
    }

    /**
     * If this method exists - it will executed before requested method.
     * It is a initialization point.
     * If callback is executed with error then requested method will not be executed.
     *
     * @param {smartclient-rpc.RPCRequest} rpcRequest - Current RPC request
     * @param {function} callback - Callback executed when finished
     */
    init(rpcRequest, callback) {
        rpcRequest.log.info("Initializing before RPC method");
        return callback();
//        return callback(new Error("Failed to initialize"));
    }

    /**
     * If this method exists - it will executed after init and before requested method.
     * Start data base transaction
     * If callback is executed with error then requested method will not be executed.
     *
     * @param {smartclient-rpc.RPCRequest} rpcRequest - Current RPC request
     * @param {function} callback - Callback executed when finished
     */
    startTransaction(rpcRequest, callback) {
        rpcRequest.log.info("Starting transaction before RPC method");
        return callback();
//        return callback(new Error("Failed to start transaction"));
    }

    /**
     * This method is executed if no 'methodName' is specified in RPC request.
     *
     * @param {smartclient-rpc.RPCRequest} rpcRequest - Current RPC request
     * @param {function} callback - Callback executed when finished
     */
    execute(rpcRequest, callback) {
        rpcRequest.log.info("Executing default RPC method");
        return callback(null, "Hello from server !!!");
//        return callback(new Error("Failed to execute"));
    }

    /**
     * Method specified in RPC request.
     *
     * @param {smartclient-rpc.RPCRequest} rpcRequest - Current RPC request
     * @param {function} callback - Callback executed when finished
     */
    executeWithResponse(rpcRequest, callback) {
        rpcRequest.log.info("Executing specified RPC method");
        return callback(null, new RPCResponse("(Special) Hello from server !!!"));
    }

    /**
     * If this method exists - it will executed after requested method successful execution.
     * Commits data base transaction
     * If callback is executed with error then rollback method will be executed.
     *
     * @param {smartclient-rpc.RPCRequest} rpcRequest - Current RPC request
     * @param {function} callback - Callback executed when finished
     */
    commit(rpcRequest, callback) {
        rpcRequest.log.info("Commiting transaction after RPC method");
        return callback();
//        return callback(new Error("Failed to commit transaction"));
    }

    /**
     * If this method exists - it will executed after requested method unsuccessful execution
     * or failure to commit.
     * Rolls back data base transaction
     * If callback is executed with error then error will be logged.
     *
     * @param {smartclient-rpc.RPCRequest} rpcRequest - Current RPC request
     * @param {function} callback - Callback executed when finished
     */
    rollback(rpcRequest, callback) {
        rpcRequest.log.info("Rolling back transaction after RPC method");
        return callback();
//        return callback(new Error("Failed to rollback transaction"));
    }

    /**
     * If this method exists - it will executed last.
     * Allows to free reources: close DB connection, close open files.
     * If callback is executed with error then error will be logged.
     *
     * @param {smartclient-rpc.RPCRequest} rpcRequest - Current RPC request
     * @param {function} callback - Callback executed when finished
     */
    freeResources(rpcRequest, callback) {
        rpcRequest.log.info("Freeing resources after RPC method");
        return callback();
//        return callback(new Error("Failed to free resources"));
    }

}

module.exports = RPCTest;
