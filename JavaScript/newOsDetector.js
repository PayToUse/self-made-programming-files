// this may not work, but this script may require the latest release of ecmascript.
const os = require('os');

let osName;
if (os.platform() === 'win32') {
    osName = 'Windows 32-bit';
} else if (os.platform() === 'win64') {
    osName = 'Windows 64-bit';
} else if (os.platform() === 'linux') {
    osName = 'Linux';
} else if (os.platform() === 'darwin') {
    osName = 'Mac OS';
} else {
    osName = 'Unknown OS';
}

console.log('This system is running ' + osName);
