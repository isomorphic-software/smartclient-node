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

/* global __dirname, Install */

const fs = require("fs-extra");
const path = require("path");
const http = require("http");
const readline = require("readline");
const unzip = require("unzip");

const Const = require("./Const");

/**
 * Class for SmartClient server instalation.
 */
class Install {

    /**
     * Installs SmartClient server.
     */
    static main() {
        // Find out installation directory
        let p = __dirname;
        const index = p.indexOf("node_modules");
        if (index > 0) {
            p = p.slice(0, index);
        }
        let installRuntime = false;
        let installExample = false;
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.on("SIGINT", function() {
            // Exit with error if Control-C pressed
            process.exit(-1);
        });
        // Request destination directory
        rl.question("Destination directory [" + p + "]: ", function(answer) {
            if (answer.trim() !== "") {
                p = answer;
            }
            rl.question("Download SmartClient evaluation runtime (WARN: overwrites existing web/isomorphic directory)? [yes]: ", function(answer) {
                if (answer.trim() === "" || answer.match(/^y(es)?$/i)) {
                    installRuntime = true;
                }
                rl.question("Install sample (WARN: overwrites existing index.html file)? [yes]: ", function(answer) {
                    rl.close();
                    if (answer.trim() === "" || answer.match(/^y(es)?$/i)) {
                        installExample = true;
                    }
                    Install._install(p, installRuntime, installExample);
                });
            });
        });
    }

    /**
     * (Internal) Actual installation.
     * Creates directory tree.
     * Copies configuration file.
     *
     * @param {string} p - Destination path
     * @param {boolean} installRuntime - Installs SmartClient runtime if <code>true</code>
     * @param {boolean} installExample - Installs example project if <code>true</code>
     */
    static _install(p, installRuntime, installExample) {
        // Test if destination directory is accessible for reading and writing
        fs.access(p, fs.constants.R_OK | fs.constants.W_OK, function(err) {
            if (err) {
                console.error("ERROR! Can not access destination directory: " + p);
                process.exit(-1);
            }
            // Creating directories for web server
            fs.copySync(path.join(__dirname, Const.CERT), path.join(p, Const.CERT), {overwrite: false});
            fs.copySync(path.join(__dirname, Const.CONF), path.join(p, Const.CONF), {overwrite: false});
            fs.ensureDirSync(path.join(p, Const.WEB));
            fs.ensureDirSync(path.join(p, Const.WEB, Const.UPLOADS));
            fs.ensureDirSync(path.join(p, Const.WEB, Const.SHARED));
            fs.ensureDirSync(path.join(p, Const.WEB, Const.SHARED, Const.APP));
            fs.ensureDirSync(path.join(p, Const.WEB, Const.SHARED, Const.DS));
            fs.ensureDirSync(path.join(p, Const.WEB, Const.SHARED, Const.DS, Const.DATA));
            fs.ensureDirSync(path.join(p, Const.WEB, Const.SHARED, Const.UI));
            if (installRuntime) {
                Install._installRuntime(p);
            }
            if (installExample) {
                Install._installExample(p);
            }
        });
    }

    /**
     * Downloads and installs SmartClient runtime.
     *
     * @param {string} p - Destination path
     */
    static _installRuntime(p) {
        // Downloading and installing SmartClient runtime
        const tmpDirName = path.join(__dirname, Const.TMP);
        fs.ensureDirSync(tmpDirName);
        const zipFileName = path.join(tmpDirName, Const.SMART_CLIENT_ZIP);
        console.log("Downloading SmarClient runtime from " + Const.SMART_CLIENT_LINK);
        const request = http.get(Const.SMART_CLIENT_LINK, function(response) {
            if (response.statusCode !== 200) {
                console.error("Failed to download SmartClient runtime from: " + Const.SMART_CLIENT_LINK);
                process.exit(-1);
            }
            response.pipe(fs.createWriteStream(zipFileName));
            response.on("end", function() {
                console.log("Unzipping SmartClient runtime file " + zipFileName + " to " + tmpDirName);
                const zipFile = fs.createReadStream(zipFileName);
                zipFile.pipe(unzip.Extract({
                    path: tmpDirName
                }));
                zipFile.on("end", function() {
                    console.log("Copying SmartClient runtime to " + path.join(p, Const.WEB, Const.ISOMORPHIC_DIR));
                    fs.copySync(path.join(tmpDirName, Const.SMART_CLIENT_RUNTIME_NAME, Const.SMART_CLIENT_DIR, Const.ISOMORPHIC_DIR), path.join(p, Const.WEB, Const.ISOMORPHIC_DIR));
                    console.log("Deleting temporary files from " + tmpDirName);
                    fs.removeSync(tmpDirName);
                    console.log("Done.");
                });
            });
        });
    }

    /**
     * Installs example.
     *
     * @param {string} p - Destination path
     */
    static _installExample(p) {
        fs.copySync(path.join(__dirname, Const.WEB), path.join(p, Const.WEB), {overwrite: true});
        fs.copySync(path.join(__dirname, Const.RPC), path.join(p, Const.RPC), {overwrite: true});
    }

}

// Start installation process
Install.main();
