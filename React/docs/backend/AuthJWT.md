# JWT Authentication explanation

# Introduction
JSON Web Tokens (JWT) are an open, industry-standard RFC 7519 method for representing claims securely between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

# Structure of JWT
A JWT is typically made up of three parts: Header, Payload, and Signature.

1. **Header**: 
   - The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

2. **Payload**: 
   - The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

3. **Signature**: 
   - To create the signature part, you have to take the encoded header, encoded payload, a secret, and the algorithm specified in the header, and sign it. 

# How JWT Authentication Works
1. The client sends a request to the server with their credentials.
2. The server verifies the credentials and, if they are valid, generates a JWT token using a secret key and sends it back to the client.
3. The client stores the token (usually in local storage) and includes it in the header of subsequent requests to the server.
4. The server receives the request with the token, verifies the token's authenticity using the secret key, and if valid, processes the request.

# Advantages of JWT
- **Compact**: JWTs are compact in size, which makes them easy to pass in URLs, POST parameters, or inside an HTTP header.
- **Self-contained**: JWTs contain all the information needed for authentication, reducing the need to query the database multiple times.
- **Secure**: JWTs can be signed and encrypted, ensuring the integrity and confidentiality of the claims.

# Conclusion
JWT is a robust and compact way to represent claims securely between two parties. Its widespread adoption and support make it a great choice for handling authentication in modern web applications.