//Retrieving all skills

const getAllSkills = () => {
    return new Promise((resolve, reject) => {
        db.query(
            'SELECT * FROM onboardingweb.skill',
            (error, rows) => {
                if (error) reject(error);
                resolve(rows);
            }
        )
    });
};