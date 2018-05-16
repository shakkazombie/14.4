var movies = [{
        id: 1,
        title: 'Rubber',
        desc: 'film o oponie',
        poster: "https://images-na.ssl-images-amazon.com/images/I/913pPQTeUrL._SY445_.jpg",
        director: "Quentin Dupieux"
    },
    {
        id: 2,
        title: 'Evil Dead 2',
        desc: 'Ash kontra Martwe Zło',
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Evil_Dead_II_poster.jpg/220px-Evil_Dead_II_poster.jpg",
        director: "Sam Raimi"
    },
    {
        id: 3,
        title: 'Raven',
        desc: 'Powieśc Edgara Allana Poe',
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/RavenPoster.jpg/1200px-RavenPoster.jpg",
        director: "Roger Corman"
    },
    {
        id: 4,
        title: 'Zakazana planeta ',
        desc: 'Wysłana na planetę Altair ekspedycja odnajduje zaginionego doktora i jego córkę, jedynych ocalałych członków załogi statku "Bellerofont". Naukowiec skrywa jednak groźny sekret.',
        poster: "https://images-na.ssl-images-amazon.com/images/I/91%2BidOIPqcL._SL1500_.jpg",
        director: "Fred M. Wilcox",
    },
    {
        id: 5,
        title: 'Jay and Silent Bob Strike Back',
        desc: 'Jay i Cichy Bob jadą do Hollywood, aby przerwać produkcję ekranizacji komiksu z ich przygodami',
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Jay_and_Silent_Bob_Strike_Back_%28theatrical_poster%29.jpg/220px-Jay_and_Silent_Bob_Strike_Back_%28theatrical_poster%29.jpg",
        director: "Kevin Smith",
    },
];

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement("h2", {}, this.props.title)
        );
    }
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement("p", {}, this.props.desc)
        );
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        poster: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement("img", {
                src: this.props.poster,
                alt: "poster"
            })
        );
    }
});

var MovieDirector = React.createClass({
    propTypes: {
        poster: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement("p", {}, this.props.director)
        );
    }

});

var MovieElements = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            React.createElement("div", {},
                React.createElement("h1", {}, "Movie list"),
                React.createElement("ul", {},
                    this.props.movies.map(function(movie) {
                        return React.createElement(Movie, {
                            key: movie.id,
                            movie: movie
                        });
                    })
                )
            )
        );
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement("li", {
                    key: this.props.movie.id
                },
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDesc, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MoviePoster, {
                    poster: this.props.movie.poster
                }),
                React.createElement(MovieDirector, {
                    director: this.props.movie.director
                })
            )
        );
    }
});

var movieElements = React.createElement(MovieElements, {
    movies: movies
});
ReactDOM.render(movieElements, document.getElementById("app"));