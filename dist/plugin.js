var capacitorAsymmetricCrypto = (function (exports, core) {
    'use strict';

    const AsymmetricCrypto = core.registerPlugin('AsymmetricCrypto', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AsymmetricCryptoWeb()),
    });

    class AsymmetricCryptoWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AsymmetricCryptoWeb: AsymmetricCryptoWeb
    });

    exports.AsymmetricCrypto = AsymmetricCrypto;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
