//router.js
module.exports = app => {
  const { router, controller } = app;
  //get请求
  router.get('/hello.do', controller.ai.getHello);
  router.get('/chat.do', controller.ai.chat);
  
};