npm //hello.js
const Controller = require('egg').Controller;
const tencentcloud = require("tencentcloud-sdk-nodejs");

class AIController extends Controller {

	async getHello() {
		this.ctx.response.body = "这是Hello!";
	}

	async chat() {
		let query = this.ctx.request.query.say;

		const NlpClient = tencentcloud.nlp.v20190408.Client;
		const clientConfig = {
			credential: {
				secretId: "AKID5zDDxQcXBYeU4dx0mIXUAaiZ9SVHm0yf",
				secretKey: "RdYCZfX9UXJo2VjiRu74lCNIyOYS7WfZ",
			},
			region: "ap-guangzhou",
			profile: {
				httpProfile: {
					endpoint: "nlp.tencentcloudapi.com",
				},
			},
		};
		const client = new NlpClient(clientConfig);

		let data = await new Promise(function(resolve, reject) {
			client.ChatBot({
				"Query": query
			}).then(
				(data) => {
					resolve(data);
				},
				(err) => {
					reject("error", err);
				}
			)
		})

		this.ctx.response.body = data;
	}
}
module.exports = AIController;
