module.exports.jwtConfig = {
    secret: "IWillChangeItSoYouCantHackMe",
    tokenExpirationTime : 60*1, //seconds
    audience: "yoursite.net",
    issuer: "yourcompany@somewhere.com"
}