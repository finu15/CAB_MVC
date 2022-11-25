const Booklist = require('../models/booking');

module.exports.index = (req, res, next) => {
    Booklist.findAll().then(confirm => {
        res.render('confirm', {
            data: confirm,

        });
    })
}

// module.exports.update = async(req, res, next) => {
//     Movie.findByPk(req.params.id)
//         .then(movieFromDb => {
//             res.render('movie-update', {
//                 data: movieFromDb
//             });
//         });
// }

// module.exports.updatePost = async (req, res, next) => {
//     // var movie = await movie.findByPk(req.params.id);
//     await Movie.update(
//         {
//             name: req.body.name,
//             releaseDate: req.body.releasedate,
//             summary: req.body.summary,
//             director: req.body.director
//         },
//         {
//             where: {id: req.params.id}
//         }
//     )
//     res.redirect('/');
// }

// module.exports.delete = async (req, res, next) => {
//     let id = req.params.id;
//     let movieFromDb = await Movie.findByPk(id);
//     if (movieFromDb != null) {
//         await Movie.destroy({
//             where: {
//                 id: id
//             }
//         });
//         res.redirect("/");
//     }
// }