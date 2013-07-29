/**
 * @fileoverview 
 * @author ued<chishang.lcw@gmail.com>
 * @module overwrite
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Overwrite
     * @constructor
     * @extends Base
     */
    function Overwrite(comConfig) {
        var self = this;
        //调用父类构造函数
        Overwrite.superclass.constructor.call(self, comConfig);
        this
    }
    S.extend(Overwrite, Base, /** @lends Overwrite.prototype*/{
		init:function(selector,config){
			var _node = $(selector);
			if(!_node) return;
		},
		bindUI:function(){
			
		}
    }, {ATTRS : /** @lends Overwrite*/{

    }});
    return Overwrite;
}, {requires:['node', 'base']});



