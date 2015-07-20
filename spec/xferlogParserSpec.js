var xferlog = require('../');

describe('xferlog Tests', function () {

    it("Parce line", function () {
        var line = 'Fri Jul 17 15:17:06 2015 1 10.1.20.112 13335 /storage/resized1/img/archive/photos/auto/photo/13460/1346091/134609123/134609123bl.jpg b _ i r img ftp 0 * c';
        var parsedLine = xferlog(line);

        expect(parsedLine['current-time'].valueOf()).toEqual(new Date('Fri Jul 17 15:17:06 2015').valueOf());
        expect(parsedLine['transfer-time']).toEqual(1);
        expect(parsedLine['remote-host']).toEqual('10.1.20.112');
        expect(parsedLine['file-size']).toEqual(13335);
        expect(parsedLine['filename']).toEqual('/storage/resized1/img/archive/photos/auto/photo/13460/1346091/134609123/134609123bl.jpg');
        expect(parsedLine['transfer-type']).toEqual('b');
        expect(parsedLine['special-action-flag']).toEqual('_');
        expect(parsedLine['direction']).toEqual('i');
        expect(parsedLine['access-mode']).toEqual('r');
        expect(parsedLine['username']).toEqual('img');
        expect(parsedLine['service-name']).toEqual('ftp');
        expect(parsedLine['authentication-method']).toEqual(0);
        expect(parsedLine['authenticated-user-id']).toEqual('*');
        expect(parsedLine['completion-status']).toEqual('c');
    });
});
