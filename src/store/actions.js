import { getDaily, getDays} from '../api/weather-api.js'

export default {
	async ACT_WEATHER({ commit }, value) {
		commit('MUT_CITY', value);
		commit('MUT_DAILY', await getDaily(value))
		commit('MUT_DAYS', await getDays(value))
	},
}