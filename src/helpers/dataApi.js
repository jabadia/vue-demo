import axios from 'axios';

const WORLDCUP_DATA_URL = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json';

let data = undefined;

export default {
    _getData() {
        return data
            ? Promise.resolve(data)
            : axios.get(WORLDCUP_DATA_URL)
                .then(response => {
                    data = response.data;
                    return data;
                });
    },
    getTeams() {
        return this._getData()
            .then(data => {
                return data.teams;
            });
    },
    getMatches() {
        return this._getData()
            .then(data => {
                const allMatches = _.orderBy(_.flatten(_.concat(
                    _.map(data.groups, 'matches'),
                    _.map(data.knockout, 'matches'),
                )), 'date');
                return allMatches;
            });
    },
};
