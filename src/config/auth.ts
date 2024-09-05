import * as jwt from 'jsonwebtoken';

export class Config {
    authenticateToken (req, res, next)  {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; 
    
        if (!token) {
            return res.sendStatus(401); 
        }
        if(token && authHeader.split(' ')[0] === 'Bearer'){
            jwt.verify(token, 'newsecret', (err, user) => {
                if (err) return res.sendStatus(403); 
                req.user = user; 
                next(); 
            });
        }
        
    }
}

