/**
 * xferlog parser
 *
 * More about xferlog:
 * xferlog - ProFTPD server logfile http://www.netsoup.net/docs/man/xferlog
 *
 *
 * Each server entry is composed of a single line of the following form, with all fields being separated by spaces.
 *
 * @module xferlog
 */
(function () {
    "use strict";
    module.exports = function (xferlogLine) {
        xferlogLine =  xferlogLine || '';
        var res = xferlogLine.split(' ');
        //console.log(res);

        //var d = new Date(res[0] + ' ' + res[1] + ' ' + res[2] + ' ' + res[3] + ' ' + res[4]);
        //console.log(parseInt(res[5]));

        return {
            "current-time": new Date(res[0] + ' ' + res[1] + ' ' + res[2] + ' ' + res[3] + ' ' + res[4]),
                             // is the current local time in the form "DDD MMM dd hh:mm:ss YYYY".
                             // Where DDD is the day of the week, MMM is the month, dd is the day of the month,
                             // hh is the hour, mm is the minutes, ss is the seconds, and YYYY is the year.

            "transfer-time": parseInt(res[5]),
                             // is the total time in seconds for the transfer.

            "remote-host": res[6],
                             // is the remote host name.

            "file-size":   parseInt(res[7]),
                             // is the size of the transferred file in bytes.

            "filename": res[8],
                             // is the name of the transferred file. If the filename contains any spaces or control characters, each such character is replaced by an underscore ('_') character.

            "transfer-type": res[9],
                             // is a single character indicating the type of transfer. Can be one of:
                             // a - for an ascii transfer
                             // b - for a binary transfer

            "special-action-flag": res[10],
                             // is one or more single character flags indicating any special action taken. Can be one or more of:
                             // C - file was compressed
                             // U - file was uncompressed
                             // T - file was tar'ed
                             // _ - no action was taken

            "direction":  res[11],
                             // is the direction of the transfer. Can be one of:
                             // o - outgoing
                             // i - incoming
                             // d - deleted

            "access-mode": res[12],
                             // is the method by which the user is logged in. Can be one of:
                             // a - (anonymous) is for an anonymous guest user.
                             // r - (real) is for a local authenticated user.

            "username": res[13],
                             // is the local username, or if guest, the ID string given.

            "service-name": res[14],
                             // is the name of the service being invoked, usually FTP.

            "authentication-method": parseInt(res[15]),
                             // is the method of authentication used. Can be one of:
                             // 0 - none
                             // 1 - RFC931 Authentication

            "authenticated-user-id": res[16],
                             // is the user id returned by the authentication method. A * is used if an authenticated user id is not available.

            "completion-status": res[17]
                             // is a single character indicating the status of the transfer. Can be one of:
                             // c - complete transfer
                             // i - incomplete transfer
        }
    }
}());
