//Retrieving all videos

const getAllVideos = () => {
    return new Promise((resolve, reject) => {
        db.query(
            'SELECT * FROM onboardingweb.video',
            (error, rows) => {
                if (error) reject(error);
                resolve(rows);
            }
        )
    });
};