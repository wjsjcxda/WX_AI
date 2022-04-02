exports.keys = "dfbgffdsafddgfd";

exports.security = {
  csrf: false
};
//设置端口号
exports.cluster = {
      listen: {
        port: 8000
      }
};

exports.cors = {
	  origin:'*',
	  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};