const axios = require('axios');

module.exports = {
    getCars(url) {
        return axios.get(url).then(res => {
            return res.data
        })
    },
    filterById(cars, id) {
        return cars.filter(car => {
            return car.id == id;
        })
    },
    randomNum() {
        return Math.floor(Math.random() * 10) + 1
    },
    filterByColor(cars, color) {
        return cars.filter(car => {
            return car.color === color;
        })
    },
    battle(elfHealth, elfAttack, orcAttack, orcHealth) {
        while (elfHealth > 0 || orcHealth > 0) {
            orcHealth -= elfAttack;
            if (orcHealth <= 0) {
                return "Elf";
            }
            elfHealth -= orcAttack;
            if (elfHealth <= 0) {
                return 'Orc';
            }
        }
    }

}