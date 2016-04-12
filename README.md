# MeanExamPrep04

###Explain basic security terms like authentication, authorization, confidentiality, integrity, SSL/TLS and provide examples of how you have used them.

#####Authentication:
Use it to recognize certain users. To authenticate the user, you can store it in several ways.
- cookies
- Tokens

See users.js in project

#####Authorization:
Categories the user, so he/she can login as an admin, and then have access to more than a regular user. To check if the users authorization you can store a cookie or a token. 

#####Confidentiality:
Control who is allowed to see what. Instead of doing it client side, it authorize the users server side. 
See app.js

#####Integrity:
To preserve the integrity of communication between the server and the client. You have to hash things as password to prevent hackers from getting it.
See models/user.js

#####SSL/TLS:
The primary goal of the TLS protocol is to provide privacy and data integrity between two communicating computer application. The SSL encrypt the communication.

#####Explain basic security threads like: Cross Site Scripting (XSS), SQL Injection and whether something similar to SQL injection is possible with NoSQL databases like MongoDB, and DOS-attacks. Explain/demonstrate ways to cope with these problems.

#####XSS:
Allow the user to write scripts to the client side, and can therefore get access to cookies or other important things.

######SQL injection:
Allow the user to get access to the sites database, and can create new users to get access to the data, or delete data. If you use prepared statements, you can secure against SQL injections.

#####DOS-attacks:
You send a lot of data to the server, and therefore overload the server, if you have a large server, you deny other users to access the server.

#####MongoDB SQL injection:
Theres is not something similar to SQL injection with a NoSQL database, however there are other security breaches. When you create a MongoDB you don’t have a password as standard, therefore all users can read/write into the database.

 
###Explain, at a fundamental level, the technologies involved, and the steps required initialize a SSL connection between a browser and a server and how to use SSL in a secure way.

- A browser requests a secure page (usually https://).
- The web server sends its public key with its certificate.
- The browser checks that the certificate was issued by a trusted party (usually a trusted root CA), that the certificate is still valid and that the certificate is related to the site contacted.
- The browser then uses the public key, to encrypt a random symmetric encryption key and sends it to the server with the encrypted URL required as well as other encrypted http data.
- The web server decrypts the symmetric encryption key using its private key and uses the symmetric key to decrypt the URL and http data.
- The web server sends back the requested html document and http data encrypted with the symmetric key.
- The browser decrypts the http data and html document using the symmetric key and displays the information.


###Explain and demonstrate ways to protect user passwords on our backends, and why this is necessary.
By hashing and salting the password, you achieve a secure password. Then you cant brute force the servers users passwords.

See models/user.js

###Explain about password hashing, salts and the difference between bcrypt and older (not recommended) algorithms like sha1, md5 etc.

Hashing is a one way so you cant convert the hashed value to the original value. But since the hashed value always will be the same, you can make a spreadsheet with passwords and the hash value. This mean that hackers can check if one of the values in the spreadsheet is equal to the hashed value from the server. 
To prevent this you can add a salt to the password. The salt is a slow algorithm, which make it harder for the hackers to get your password, because making a spreadsheet with lots of salt each taking 2-3 minutes to generate would take lots of time. 
When you have to salt and hash the data, you use Bcrypt. The reason why you use this encryption module, is because it’s a slow algorithm. The other older algorithms are faster, and therefore the hackers can generate a spreadsheet faster with hashed values and passwords.

###Explain about JSON Web Tokens (jwt) and why they are very suited for a REST-based API
JWT are used to authenticate a user. The token contains multiple data. JWT contains a header which algorithm it uses, a payload with data and a signature to ensure integrity.

###Explain and demonstrate a system using jwt's, focusing on both client and server side.


###Explain and demonstrate use of the npm passportjs module
Passport can use the JWT token to ensure that the user is authorized to the given site.  Passport can be used to login at Facebook and lots of other sites.

See config/passport.js

###Explain, at a very basic level, OAuth 2 + OpenID Connect and the problems it solves.
Allows the user to log into third party website. These websites provides the user a JWT which secure the users information. 
By using OAuth 2.0 + OpenID Connect, you don’t have to store the users password, and hopefully the companies that they are logging into have better security than you could create, and have larger databases to store user information.

###Demonstrate, with focus on security, a proposal for an Express/Mongo+Angular-seed with built in support for most of the basic security problems, SSL and ready to deploy on your favourite Cloud Hosting Service.
See seed uploaded
