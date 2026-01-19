export default () =>({
    jwt:{
        secret:process.env.JWT_SECRET ||' wthghtr',
        expiresIN:process.env.JWT_EXPIRES_IN || '1h',
    },
});