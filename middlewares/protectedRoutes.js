module.exports = (req, res, next) => {
    if(!req.user){
    //#If there is no user:
        return res.status(401).send({error: "You must login!"})
    }
    next();
}
