module.exports.login = function(req, res) {
    let a = req.body
    console.log(a)
    res.status(200).json({
         login: {
             email: req.body.email,
             password: req.body.password
         }
    })
}

module.exports.register = function (req, res) {

}