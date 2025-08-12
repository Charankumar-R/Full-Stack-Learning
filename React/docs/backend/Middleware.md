# Middleware explanation

# Middleware.md

## Middleware in Express

Middleware functions run during the request/response cycle.

### Basic Theory
- Used for logging, authentication, parsing, etc.

### Code Walkthrough
```
app.use((req, res, next) => {
  console.log('Request:', req.method, req.url);
  next();
});
```

### Real-World Usage
- Logging, error handling, security

### Advanced Techniques
- Custom middleware, error-handling middleware