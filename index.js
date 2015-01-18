var app = require('RESTful');

var user = app.createPool().address('localhost/user');

var userData = {
	'username':'hana',
	'password':'anohana'
};

user.data(userData);

//查询
user.get = function(req,res,data){
	res.send({
		'username'+' is : '+data.username+';\npassword' +data.password
	});
};

/*更新
根据post请求自动更新数据
*/
user.post = function(req,res,data){
	console.log(data);
};