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

/**
 * Class holds various contants.
 */
class Const {

///////////////////////////////////////////////////////////////////////////////
// Constants used in Install class.
///////////////////////////////////////////////////////////////////////////////

    /**
     * Directory name for SSL certificates.
     *
     * @type {string}
     */
    static get CERT() {
        return "cert";
    }

    /**
     * Directory name for configuration files.
     *
     * @type {string}
     */
    static get CONF() {
        return "conf";
    }

    /**
     * Directory name for web content.
     *
     * @type {string}
     */
    static get WEB() {
        return "web";
    }

    /**
     * Directory name for uploaded files.
     *
     * @type {string}
     */
    static get UPLOADS() {
        return "uploads";
    }

    /**
     * Directory name for shared files.
     *
     * @type {string}
     */
    static get SHARED() {
        return "shared";
    }

    /**
     * Directory name for application files.
     *
     * @type {string}
     */
    static get APP() {
        return "app";
    }

    /**
     * Directory name for data source files.
     *
     * @type {string}
     */
    static get DS() {
        return "ds";
    }

    /**
     * Directory name for data source data files.
     *
     * @type {string}
     */
    static get DATA() {
        return "data";
    }

    /**
     * Directory name for user interface files.
     *
     * @type {string}
     */
    static get UI() {
        return "ui";
    }

    /**
     * Directory name for RPC example.
     *
     * @type {string}
     */
    static get RPC() {
        return "rpc";
    }

    /**
     * Temporary directory name for extracting SmartClient runtime.
     *
     * @type {string}
     */
    static get TMP() {
        return "tmp";
    }

    /**
     * File name for downloaded SmartClient runtime zip.
     *
     * @type {string}
     */
    static get SMART_CLIENT_ZIP() {
        return "SmartClient.zip";
    }

    /**
     * Name of SmartClient runtime to download.
     *
     * @type {string}
     */
    static get SMART_CLIENT_RUNTIME_NAME() {
        return "SmartClient_SNAPSHOT_v111d_2017-05-10_Evaluation";
    }

    /**
     * Link to SmartClient runtim zip.
     *
     * @type {string}
     */
    static get SMART_CLIENT_LINK() {
        return "http://www.smartclient.com/builds/SmartClient/11.1d/Eval/2017-05-10/" + Const.SMART_CLIENT_RUNTIME_NAME + ".zip";
    }

    /**
     * Name of SmartClient runtime directory.
     *
     * @type {string}
     */
    static get SMART_CLIENT_DIR() {
        return "smartclientRuntime";
    }

    /**
     * Name of isomorphic directory.
     *
     * @type {string}
     */
    static get ISOMORPHIC_DIR() {
        return "isomorphic";
    }

}

module.exports = Const;
