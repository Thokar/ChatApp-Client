// Using API Proxy https://medium.freecodecamp.org/the-best-ways-to-connect-to-the-server-using-angular-cli-b0c6b699716c

var HttpsProxyAgent = require('https-proxy-agent');
var proxyConfig = [{
  context: '/api',
  target: 'http://localhost:5080',
  secure: false
}];

function setupForCorporateProxy(proxyConfig) {
    var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
    if (proxyServer) {
      var agent = new HttpsProxyAgent(proxyServer);
      console.log('Using corporate proxy server: ' + proxyServer);
      proxyConfig.forEach(function(entry) {
        entry.agent = agent;
      });
    }
    return proxyConfig;
  }

  module.exports = setupForCorporateProxy(proxyConfig);