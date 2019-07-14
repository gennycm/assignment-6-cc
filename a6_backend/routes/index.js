module.exports = {
    getEmployees: (req, res) => {
        let query = "SELECT * FROM `employee` ORDER BY id ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(result);
        });
    },
    createEmployee: (req, res) =>{
        let name = req.query.name;
        let lastName = req.query.lastName;
        let address = req.query.address;
        let age = req.query.age;
        let phoneNumber = req.query.phoneNumber;

        let query = "INSERT INTO `employee` (name, lastName, address, age, phoneNumber) VALUES ('" +
            name + "', '" + lastName + "', '" + address + "', '" + age + "', '" + phoneNumber + "')";

        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(result);
        });
    }


};
