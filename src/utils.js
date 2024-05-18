

export const getGenreNames = (genreIds, genres) => {
    let genreNames = genreIds
        .map(id => {
            const genre = genres.find(genre => genre.id === id);
            return genre ? genre.name : null;
        })
        .filter(name => name !== null)
        .join(' . ');
    return genreNames;
};


