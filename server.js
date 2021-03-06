#!/usr/bin/env node

/*

  Isomorphic SmartClient Node.js Server
  Copyright 2017 and beyond Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE
     OF ISOMORPHIC SOFTWARE LICENSE TERMS. If you have received this file
     without an accompanying Isomorphic Software license file, please
     contact licensing@isomorphic.com for details. Unauthorized copying and
     use of this software is a violation of international copyright law.

  LGPL LICENSE
     This software may be used under the terms of the Lesser GNU Public License (LGPL),
     version 3.0 (see http://www.gnu.org/licenses/lgpl-3.0.html).  The LGPL is generally
     considered a commercial-friendly license, and is used by the Hibernate framework
     among others.  For any questions about the LGPL, please refer to a qualified attorney;
     Isomorphic does not provide legal advice.

  OTHER LICENSE OPTIONS
     Alternative licensing terms, including licenses with no requirement to make modifications
     publicly available, can be arranged by contacting Isomorphic Software by email
     (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

"use strict";

const Log = require("srv-log").Log;
const Init = require("smartclient-rpc").Init;

// Initialize and start HTTP server
Init.go(function(err) {
    if (err) {
        // Initialization failure
        Log.logger.error({err: err}, "Failed to initialize");
    } else {
        // Starting HTTP server
        const HTTPServer = require("srv-server").HTTPServer;
        HTTPServer.start(function(err) {
            if (err) {
                Log.logger.error({err: err}, "Failed to start HTTP server");
            }
        });
        // Starting HTTPS server
        const HTTPSServer = require("srv-server").HTTPSServer;
        HTTPSServer.start(function(err) {
            if (err) {
                Log.logger.error({err: err}, "Failed to start HTTPS server");
            }
        });
    }
});
