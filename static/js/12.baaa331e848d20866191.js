webpackJsonp([12],{"82gz":function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n("//Fk"),a=n.n(e),r=n("7+uW"),i=n("mtWM"),c=n.n(i);r.a.prototype.$axios=c.a,c.a.defaults.baseURL="http://api.cat-shop.penkuoer.com",c.a.interceptors.request.use(function(t){return localStorage.getItem("token")&&(console.log("请求了token"),t.headers.common.authorization="Bearer "+localStorage.getItem("token")),t},function(t){return console.log("请求错误"),a.a.reject(t)}),c.a.interceptors.response.use(function(t){return console.log("获取到数据了"),t},function(t){return a.a.reject(t)});var u={data:function(){return{list:[]}},methods:{tap23:function(){api.postUserInfo({userName:"nihaomama",password:"12312jjjj",nickName:"昵称",avatar:"124"}).then(function(t){console.log(t)})},tap:function(){this.$axios({method:"post",url:"/api/v1/auth/login",data:{userName:"mooncup",password:"mooncup"}}).then(function(t){console.log(t.data),localStorage.setItem("token",t.data.token)})},tap1:function(){localStorage.getItem("token");this.$axios({url:"/api/v1/users/info"}).then(function(t){console.log(t.data)})},reg:function(){this.$axios({method:"post",url:"/api/v1/auth/reg",data:{userName:"mooncup",password:"mooncup",nickName:"mooncup",avatar:"mooncup"}}).then(function(t){console.log(t)})},log:function(){this.$axios({method:"post",url:"/api/v1/auth/manager_login",data:{userName:"admin",password:"admin"}}).then(function(t){console.log(t.data.token),localStorage.setItem("token",t.data.token)})},adminInfo:function(){this.$axios({method:"get",url:"/api/v1/users/manager_info"}).then(function(t){console.log(t)})},getUsers:function(){this.$axios({method:"get",url:"/api/v1/admin/users",params:{}}).then(function(t){console.log(t.data)})},resetUser:function(){this.$axios({method:"put",url:"/api/v1/admin/users/5d5e76bab91b9569e466e854",data:{userName:"mooncup",nickName:"mooncup改名了",avatar:"ahttp"}}).then(function(t){console.log(t.data)})},addPro:function(){this.$axios({method:"post",url:"/api/v1/admin/products",data:{name:"潮品",descriptions:"这是未来前段精英们做的一个app",quantity:4,price:8888,productCategory:"chaopin"}}).then(function(t){console.log(t)})},getPro:function(){this.$axios({method:"get",url:"/api/v1/products",params:{}}).then(function(t){console.log(t)})},getDetail:function(){this.$axios({method:"get",url:"/api/v1/products/5d5e6e92b91b9569e466e852",params:{}}).then(function(t){console.log(t)})},addCart:function(){this.$axios({method:"post",url:"/api/v1/shop_carts",params:{product:"5d5e6e92b91b9569e466e852"}}).then(function(t){console.log(t)})},cartInfo:function(){this.$axios({method:"get",url:"/api/v1/shop_carts",params:{}}).then(function(t){console.log(t.data)})},deleteCart:function(){this.$axios({method:"delete",url:"/api/v1/shop_carts/5d61286b26a7dacecef01613"}).then(function(t){console.log(t)})},postOrder:function(){var t="5d5e6e92b91b9569e466e852";this.$axios({method:"post",url:"/api/v1/orders",data:{receiver:"覃永发",regions:"广东省罗定市",address:"船步镇",orderDetails:[{quantity:1,product:t,price:99},{quantity:3,product:t,price:88}]}}).then(function(t){console.log(t)})},orderList:function(){this.$axios({method:"get",url:"/api/v1/orders",params:{}}).then(function(t){console.log(t)})},cartOne:function(){this.$axios({method:"get",url:"/api/v1/shop_carts",params:{_id:"5d632af326a7dacecef08ce8"}}).then(function(t){console.log(t)})}},mounted:function(){}},s={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("h2",{staticStyle:{height:"60px",background:"green"}},[t._v("Try")]),t._v(" "),n("section",[n("h3",[t._v("用户")]),t._v(" "),n("button",{on:{click:function(o){return t.reg()}}},[t._v("注册")]),t._v(" "),n("button",{on:{click:function(o){return t.tap()}}},[t._v("登陆")]),t._v(" "),n("button",{on:{click:function(o){return t.tap1()}}},[t._v("获取用户信息")]),t._v(" "),n("button",{on:{click:function(o){return t.getPro()}}},[t._v("获取商品信息")]),t._v(" "),n("button",{on:{click:function(o){return t.getDetail()}}},[t._v("获取商品详情")]),t._v(" "),n("button",{on:{click:function(o){return t.addCart()}}},[t._v("添加购物车")]),t._v(" "),n("button",{on:{click:function(o){return t.cartInfo()}}},[t._v("购物车信息")]),t._v(" "),n("button",{on:{click:function(o){return t.deleteCart()}}},[t._v("删除购物车信息")]),t._v(" "),n("button",{on:{click:function(o){return t.postOrder()}}},[t._v("提交订单")]),t._v(" "),n("button",{on:{click:function(o){return t.orderList()}}},[t._v("获取订单列表")]),t._v(" "),n("hr"),t._v(" "),n("h3",[t._v("管理")]),t._v(" "),n("button",{on:{click:function(o){return t.log()}}},[t._v("admin登录")]),t._v(" "),n("button",{on:{click:function(o){return t.adminInfo()}}},[t._v("admin获取信息")]),t._v(" "),n("button",{on:{click:function(o){return t.getUsers()}}},[t._v("admin用户列表")]),t._v(" "),n("button",{on:{click:function(o){return t.resetUser()}}},[t._v("修改用户信息")]),t._v(" "),n("button",{on:{click:function(o){return t.addPro()}}},[t._v("增加商品信息")])]),t._v(" "),n("footer",{staticStyle:{height:"60px",background:"green"}},[t._v("footer")])])},staticRenderFns:[]};var l=n("VU/8")(u,s,!1,function(t){n("jvHS")},"data-v-bbe5dbf0",null);o.default=l.exports},jvHS:function(t,o){}});
//# sourceMappingURL=12.baaa331e848d20866191.js.map