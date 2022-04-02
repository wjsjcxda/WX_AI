// pages/myai/myai.js
Page({
    data: {
        list:[
            {
                flag:'me',
                img:'http://172.17.38.49:8000/public/me.jpg',
                msg:'你叫什么',
            },
            {
                flag:'ai',
                img:'http://172.17.38.49:8000/public/ai.jpg',
                msg:'我是小龙女',
            }
        ],

        sendmsg:'',
        toview:''
    },

    send() {
        wx.showToast({
          title: this.data.sendmsg,
        });
        let sendObj = {
            flag: 'me',
            img: 'http://172.17.38.49:8000/public/me.jpg',
            msg: this.data.sendmsg,
        };
        this.data.list.push(sendObj);
        this.setData({
            list: this.data.list
        })

        let that = this;
        //向服务器发出请求
        wx.request({
            url:'http://172.17.38.49:8000/chat.do',
            data: {
                say: this.data.sendmsg
            },
            //当服务器返回数据时自动调用，返回的数据就是res.data
            success(res){
                let receiveObj = {
                    flag:'ai',
                    img:'http://172.17.38.49:8000/public/ai.jpg',
                    msg: res.data.Reply
                };
                that.data.list.push(receiveObj);
                that.setData({
                    list: that.data.list,
                    toview:'myview',
                    sendmsg:''
                })
            }
        });
    }
})