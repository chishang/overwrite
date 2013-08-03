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
    }
    S.extend(Overwrite, Base, /** @lends Overwrite.prototype*/{
		init:function(){
            var self = this;
            var node = self.get('node');
            if(!node){
                return;
            }
            self.bindUI();
            self.bindEvent();

		},
        bindUI:function(){
            var self = this;
            var node = self.get('node');
            node.addClass('overwrite_input');
            node.val('');
            var wraper = S.DOM.create('<div class="J_OverwriteWraper overwrite"/>');
            node.wrap(wraper);
            wraper = S.all('.J_OverwriteWraper');
            var tip = S.DOM.create('<span class="overwrite_tip J_OverwriteTip"/>');
            wraper.append(tip);
            tip = S.all('.J_OverwriteTip');
            node.css({
                textIndent:'-99999px'
            })
            tip.css({
                fontSize:node.css('fontSize'),
                lineHeight:node.css('lineHeight'),
                top: node.height()/2,
                left:'4px'
            })
            tip.html(self.get('pattern'));
        },
		bindEvent:function(){
            var self = this;
            var node = self.get('node');
            var separator = self.get('separator');
            var pattern = self.get('pattern');
            node.on('keyup',function(e){
                var node = S.one(e.currentTarget);
                var value = node.val();
                var plen = pattern.length;
                var vlen = value.length;
                var showtip = pattern.slice(vlen,plen);
                var showval = value.slice(0,plen);

                //判断间隔符是否正确
                var finalval = value.slice(vlen-1);
                var finalpattern = pattern.slice(vlen-1,vlen);
                if(finalpattern === separator && finalval!== separator){
                    showval = showval.slice(0,vlen-1) + separator + finalval;
                    showtip = showtip.slice(1);
                    node.val(showval);
                }
                if(vlen>plen){
                    node.val(showval);
                }
                var wrapnode = node.parent('.J_OverwriteWraper');
                var tipnode = wrapnode.one('.J_OverwriteTip');
                tipnode.html(showval+showtip);
            });
		}
    }, {ATTRS : /** @lends Overwrite*/{
       node:{
           value:null
       },
        pattern:{
          value:'YYYY-MM-DD'
        },
        separator:{
            value:'-'
        },
        wrapSel:{
            value:'J_OverwriteWraper'
        },
        tipSel:{
            value:'J_OverwriteTip'
        }
    }});
    return Overwrite;
}, {requires:['node', 'base','./index.css']});



