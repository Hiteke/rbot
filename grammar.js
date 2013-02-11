/* parser generated by jison 0.4.2 */
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"exp":4,"EOF":5,"if":6,"S":7,"condition":8,"then":9,"else":10,"endif":11,"repeat":12,"until":13,"done":14,"stopRepeat":15,"do":16,"listeE":17,"task":18,"dig":19,"position":20,"moveTo":21,"move":22,"pos":23,"simplePlayer":24,"lookForBlock":25,"block":26,"lookForEntity":27,"entity":28,"stopMoveTo":29,"list":30,"toss":31,"int":32,"item":33,"equip":34,"destination":35,"unequip":36,"lookAt":37,"say":38,"message":39,"wait":40,"activateItem":41,"deactivateItem":42,"build":43,"craft":44,"jump":45,"digForward":46,"attack":47,"shoot":48,"get":49,"simpleBlock":50,"follow":51,"up":52,"T":53,"N":54,".":55,"me":56,"player":57,"nearestMob":58,"mob":59,"nearestObject":60,"object":61,"nearestReachableMob":62,"nearestReachableObject":63,"*":64,"nearestReachablePosition":65,"ent":66,"bloc":67,"simplePosition":68,"nearestBlock":69,"at":70,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"if",7:"S",9:"then",10:"else",11:"endif",12:"repeat",13:"until",14:"done",15:"stopRepeat",16:"do",19:"dig",21:"moveTo",22:"move",23:"pos",25:"lookForBlock",27:"lookForEntity",29:"stopMoveTo",30:"list",31:"toss",34:"equip",36:"unequip",37:"lookAt",38:"say",40:"wait",41:"activateItem",42:"deactivateItem",43:"build",44:"craft",45:"jump",46:"digForward",47:"attack",48:"shoot",49:"get",51:"follow",52:"up",53:"T",54:"N",55:".",56:"me",57:"player",58:"nearestMob",60:"nearestObject",62:"nearestReachableMob",63:"nearestReachableObject",64:"*",65:"nearestReachablePosition",66:"ent",67:"bloc",68:"simplePosition",69:"nearestBlock",70:"at"},
productions_: [0,[3,2],[4,13],[4,9],[4,9],[4,5],[4,5],[4,3],[4,1],[18,0],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,1],[18,1],[18,5],[18,5],[18,3],[18,3],[18,3],[18,3],[18,1],[18,1],[18,3],[18,5],[18,1],[18,3],[18,3],[18,3],[18,3],[18,3],[18,1],[18,1],[32,0],[32,1],[39,0],[39,2],[39,3],[35,0],[35,1],[33,0],[33,1],[24,0],[24,1],[28,0],[28,1],[28,3],[28,3],[28,3],[28,3],[28,3],[59,0],[59,1],[59,1],[61,0],[61,1],[61,1],[20,0],[20,3],[20,3],[20,3],[20,1],[50,0],[50,1],[50,1],[26,0],[26,3],[17,5],[17,3],[8,3],[8,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
	function arrayToString(a)
	{
		return "["+a.map(taskToString).join()+"]";
	}
	function taskToString(t)
	{
		if(t.constructor == Array) return arrayToString(t);
		if(t.constructor == String) return '"'+t+'"';
	}
	console.log(taskToString($$[$0-1])); return $$[$0-1];	

break;
case 2:this.$=['ifThenElse',[$$[$0-10],$$[$0-6],$$[$0-2]]];
break;
case 3:this.$=['ifThen',[$$[$0-6],$$[$0-2]]];
break;
case 4:this.$=['repeatUntil',[$$[$0-6],$$[$0-2]]];
break;
case 5:this.$=['repeat',[$$[$0-2]]];
break;
case 6:this.$=['stopRepeat',[$$[$0-2]]];
break;
case 7:this.$=['taskList',[$$[$0]]];
break;
case 8:this.$=$$[$0]
break;
case 10:this.$=['dig',[$$[$0]]];
break;
case 11:this.$=['move to',[$$[$0]]];
break;
case 12:this.$=['move',[$$[$0]]];
break;
case 13:this.$=['pos',[$$[$0]]];
break;
case 14:this.$=['look for block',[$$[$0]]];
break;
case 15:this.$=['look for entity',[$$[$0]]];
break;
case 16:this.$=['stop move to',[]];
break;
case 17:this.$=['list',[]];
break;
case 18:this.$=['toss',[$$[$0-2],$$[$0]]];
break;
case 19:this.$=['equip',[$$[$0-2],$$[$0]]];
break;
case 20:this.$=['unequip',[$$[$0]]];
break;
case 21:this.$=['look at',[$$[$0]]];
break;
case 22:this.$=['say',[$$[$0]]];
break;
case 23:this.$=['wait',[$$[$0]]];
break;
case 24:this.$=['activate item',[]];
break;
case 25:this.$=['deactivate item',[]];
break;
case 26:this.$=['build',[$$[$0]]];
break;
case 27:this.$=['craft',[$$[$0-2],$$[$0]]];
break;
case 28:this.$=['jump',[]];
break;
case 29:this.$=['dig forward',[$$[$0]]];
break;
case 30:this.$=['attack',[$$[$0]]];
break;
case 31:this.$=['shoot',[$$[$0]]];
break;
case 32:this.$=['get',[$$[$0]]];
break;
case 33:this.$=['follow',[$$[$0]]];
break;
case 34:this.$=['up',[]]
break;
case 35:this.$=[$$[$0],[]];
break;
case 37:this.$=$$[$0]
break;
case 39:this.$=$$[$0-1]
break;
case 40:this.$=$$[$0-2]+' '+$$[$0]
break;
case 42:this.$=$$[$0]
break;
case 44:this.$=$$[$0]
break;
case 46:this.$=$$[$0]
break;
case 48:this.$=$$[$0]
break;
case 49:this.$=$$[$0-2]+' '+$$[$0]
break;
case 50:this.$=$$[$0-2]+' '+$$[$0];
break;
case 51:this.$=$$[$0-2]+' '+$$[$0];
break;
case 52:this.$=$$[$0-2]+' '+$$[$0];
break;
case 53:this.$=$$[$0-2]+' '+$$[$0];
break;
case 55:this.$=$$[$0]
break;
case 56:this.$=$$[$0]
break;
case 58:this.$=$$[$0]
break;
case 59:this.$=$$[$0]
break;
case 61:this.$=$$[$0-2]+' '+$$[$0]
break;
case 62:this.$=$$[$0-2]+' '+$$[$0]
break;
case 63:this.$=$$[$0-2]+' '+$$[$0]
break;
case 64:this.$=$$[$0]
break;
case 66:this.$=$$[$0];
break;
case 67:this.$=$$[$0]
break;
case 69:this.$=$$[$0-2]+' '+$$[$0];
break;
case 70:$$[$0].unshift($$[$0-4]);this.$=$$[$0]
break;
case 71:this.$=[$$[$0-2]];
break;
case 72:this.$=$$[$0-2]+' '+$$[$0]
break;
case 73:this.$=$$[$0]
break;
}
},
table: [{3:1,4:2,5:[2,9],6:[1,3],12:[1,4],15:[1,5],16:[1,6],18:7,19:[1,8],21:[1,9],22:[1,10],23:[1,11],25:[1,12],27:[1,13],29:[1,14],30:[1,15],31:[1,16],34:[1,17],36:[1,18],37:[1,19],38:[1,20],40:[1,21],41:[1,22],42:[1,23],43:[1,24],44:[1,25],45:[1,26],46:[1,27],47:[1,28],48:[1,29],49:[1,30],51:[1,31],52:[1,32],53:[1,33]},{1:[3]},{5:[1,34]},{7:[1,35]},{7:[1,36]},{7:[1,37]},{7:[1,38]},{5:[2,8],7:[2,8]},{7:[1,39]},{7:[1,40]},{7:[1,41]},{7:[1,42]},{7:[1,43]},{7:[1,44]},{5:[2,16],7:[2,16]},{5:[2,17],7:[2,17]},{7:[1,45]},{7:[1,46]},{7:[1,47]},{7:[1,48]},{7:[1,49]},{7:[1,50]},{5:[2,24],7:[2,24]},{5:[2,25],7:[2,25]},{7:[1,51]},{7:[1,52]},{5:[2,28],7:[2,28]},{7:[1,53]},{7:[1,54]},{7:[1,55]},{7:[1,56]},{7:[1,57]},{5:[2,34],7:[2,34]},{5:[2,35],7:[2,35]},{1:[2,1]},{8:58,53:[1,60],70:[1,59]},{4:61,6:[1,3],7:[2,9],12:[1,4],15:[1,5],16:[1,6],18:7,19:[1,8],21:[1,9],22:[1,10],23:[1,11],25:[1,12],27:[1,13],29:[1,14],30:[1,15],31:[1,16],34:[1,17],36:[1,18],37:[1,19],38:[1,20],40:[1,21],41:[1,22],42:[1,23],43:[1,24],44:[1,25],45:[1,26],46:[1,27],47:[1,28],48:[1,29],49:[1,30],51:[1,31],52:[1,32],53:[1,33]},{4:62,6:[1,3],7:[2,9],12:[1,4],15:[1,5],16:[1,6],18:7,19:[1,8],21:[1,9],22:[1,10],23:[1,11],25:[1,12],27:[1,13],29:[1,14],30:[1,15],31:[1,16],34:[1,17],36:[1,18],37:[1,19],38:[1,20],40:[1,21],41:[1,22],42:[1,23],43:[1,24],44:[1,25],45:[1,26],46:[1,27],47:[1,28],48:[1,29],49:[1,30],51:[1,31],52:[1,32],53:[1,33]},{4:64,6:[1,3],7:[2,9],12:[1,4],15:[1,5],16:[1,6],17:63,18:7,19:[1,8],21:[1,9],22:[1,10],23:[1,11],25:[1,12],27:[1,13],29:[1,14],30:[1,15],31:[1,16],34:[1,17],36:[1,18],37:[1,19],38:[1,20],40:[1,21],41:[1,22],42:[1,23],43:[1,24],44:[1,25],45:[1,26],46:[1,27],47:[1,28],48:[1,29],49:[1,30],51:[1,31],52:[1,32],53:[1,33]},{5:[2,60],7:[2,60],20:65,65:[1,66],66:[1,67],67:[1,68],68:[1,69]},{5:[2,60],7:[2,60],20:70,65:[1,66],66:[1,67],67:[1,68],68:[1,69]},{5:[2,60],7:[2,60],20:71,65:[1,66],66:[1,67],67:[1,68],68:[1,69]},{5:[2,45],7:[2,45],24:72,53:[1,73]},{5:[2,68],7:[2,68],26:74,69:[1,75]},{5:[2,47],7:[2,47],28:76,56:[1,77],57:[1,78],58:[1,79],60:[1,80],62:[1,81],63:[1,82]},{7:[2,36],32:83,54:[1,84]},{7:[2,41],35:85,53:[1,86]},{5:[2,43],7:[2,43],33:87,53:[1,88]},{5:[2,60],7:[2,60],20:89,65:[1,66],66:[1,67],67:[1,68],68:[1,69]},{5:[2,38],7:[2,38],39:90,53:[1,91]},{5:[2,36],7:[2,36],32:92,54:[1,84]},{5:[2,60],7:[2,60],20:93,65:[1,66],66:[1,67],67:[1,68],68:[1,69]},{7:[2,36],32:94,54:[1,84]},{5:[2,60],7:[2,60],20:95,65:[1,66],66:[1,67],67:[1,68],68:[1,69]},{5:[2,47],7:[2,47],28:96,56:[1,77],57:[1,78],58:[1,79],60:[1,80],62:[1,81],63:[1,82]},{5:[2,60],7:[2,60],20:97,65:[1,66],66:[1,67],67:[1,68],68:[1,69]},{5:[2,65],7:[2,65],50:98,53:[1,99],64:[1,100]},{5:[2,60],7:[2,60],20:101,65:[1,66],66:[1,67],67:[1,68],68:[1,69]},{7:[1,102]},{7:[1,103]},{7:[2,73]},{7:[1,104]},{7:[1,105]},{5:[2,7],7:[2,7]},{7:[1,106]},{5:[2,10],7:[2,10]},{7:[1,107]},{7:[1,108]},{7:[1,109]},{5:[2,64],7:[2,64]},{5:[2,11],7:[2,11]},{5:[2,12],7:[2,12]},{5:[2,13],7:[2,13]},{5:[2,46],7:[2,46]},{5:[2,14],7:[2,14]},{7:[1,110]},{5:[2,15],7:[2,15]},{5:[2,48],7:[2,48]},{7:[1,111]},{7:[1,112]},{7:[1,113]},{7:[1,114]},{7:[1,115]},{7:[1,116]},{5:[2,37],7:[2,37]},{7:[1,117]},{7:[2,42]},{5:[2,20],7:[2,20]},{5:[2,44],7:[2,44]},{5:[2,21],7:[2,21]},{5:[2,22],7:[2,22]},{7:[1,119],55:[1,118]},{5:[2,23],7:[2,23]},{5:[2,26],7:[2,26]},{7:[1,120]},{5:[2,29],7:[2,29]},{5:[2,30],7:[2,30]},{5:[2,31],7:[2,31]},{5:[2,32],7:[2,32]},{5:[2,66],7:[2,66]},{5:[2,67],7:[2,67]},{5:[2,33],7:[2,33]},{9:[1,121]},{7:[2,60],20:122,65:[1,66],66:[1,67],67:[1,68],68:[1,69]},{13:[1,123],14:[1,124]},{14:[1,125]},{9:[1,126],14:[1,127]},{5:[2,60],7:[2,60],20:128,65:[1,66],66:[1,67],67:[1,68],68:[1,69]},{5:[2,47],7:[2,47],28:129,56:[1,77],57:[1,78],58:[1,79],60:[1,80],62:[1,81],63:[1,82]},{5:[2,68],7:[2,68],26:130,69:[1,75]},{5:[2,65],7:[2,65],50:131,53:[1,99],64:[1,100]},{5:[2,45],7:[2,45],24:132,53:[1,73]},{5:[2,54],7:[2,54],53:[1,134],59:133,64:[1,135]},{5:[2,57],7:[2,57],53:[1,137],61:136,64:[1,138]},{5:[2,54],7:[2,54],53:[1,134],59:139,64:[1,135]},{5:[2,57],7:[2,57],53:[1,137],61:140,64:[1,138]},{5:[2,43],7:[2,43],33:141,53:[1,88]},{5:[2,43],7:[2,43],33:142,53:[1,88]},{5:[2,39],7:[2,39]},{5:[2,38],7:[2,38],39:143,53:[1,91]},{5:[2,43],7:[2,43],33:144,53:[1,88]},{7:[1,145]},{7:[2,72]},{7:[1,146]},{5:[2,5],7:[2,5]},{5:[2,6],7:[2,6]},{7:[1,147]},{5:[2,71],7:[2,71]},{5:[2,61],7:[2,61]},{5:[2,62],7:[2,62]},{5:[2,63],7:[2,63]},{5:[2,69],7:[2,69]},{5:[2,49],7:[2,49]},{5:[2,50],7:[2,50]},{5:[2,55],7:[2,55]},{5:[2,56],7:[2,56]},{5:[2,51],7:[2,51]},{5:[2,58],7:[2,58]},{5:[2,59],7:[2,59]},{5:[2,52],7:[2,52]},{5:[2,53],7:[2,53]},{5:[2,18],7:[2,18]},{5:[2,19],7:[2,19]},{5:[2,40],7:[2,40]},{5:[2,27],7:[2,27]},{4:148,6:[1,3],7:[2,9],12:[1,4],15:[1,5],16:[1,6],18:7,19:[1,8],21:[1,9],22:[1,10],23:[1,11],25:[1,12],27:[1,13],29:[1,14],30:[1,15],31:[1,16],34:[1,17],36:[1,18],37:[1,19],38:[1,20],40:[1,21],41:[1,22],42:[1,23],43:[1,24],44:[1,25],45:[1,26],46:[1,27],47:[1,28],48:[1,29],49:[1,30],51:[1,31],52:[1,32],53:[1,33]},{8:149,53:[1,60],70:[1,59]},{4:64,6:[1,3],7:[2,9],12:[1,4],15:[1,5],16:[1,6],17:150,18:7,19:[1,8],21:[1,9],22:[1,10],23:[1,11],25:[1,12],27:[1,13],29:[1,14],30:[1,15],31:[1,16],34:[1,17],36:[1,18],37:[1,19],38:[1,20],40:[1,21],41:[1,22],42:[1,23],43:[1,24],44:[1,25],45:[1,26],46:[1,27],47:[1,28],48:[1,29],49:[1,30],51:[1,31],52:[1,32],53:[1,33]},{7:[1,151]},{7:[1,152]},{5:[2,70],7:[2,70]},{10:[1,153],11:[1,154]},{14:[1,155]},{7:[1,156]},{5:[2,3],7:[2,3]},{5:[2,4],7:[2,4]},{4:157,6:[1,3],7:[2,9],12:[1,4],15:[1,5],16:[1,6],18:7,19:[1,8],21:[1,9],22:[1,10],23:[1,11],25:[1,12],27:[1,13],29:[1,14],30:[1,15],31:[1,16],34:[1,17],36:[1,18],37:[1,19],38:[1,20],40:[1,21],41:[1,22],42:[1,23],43:[1,24],44:[1,25],45:[1,26],46:[1,27],47:[1,28],48:[1,29],49:[1,30],51:[1,31],52:[1,32],53:[1,33]},{7:[1,158]},{11:[1,159]},{5:[2,2],7:[2,2]}],
defaultActions: {34:[2,1],60:[2,73],86:[2,42],122:[2,72]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* generated by jison-lex 0.1.0 */
var lexer = (function(){
var lexer = {
EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 6;
break;
case 1:return 16;
break;
case 2:return 10;
break;
case 3:return 11;
break;
case 4:return 12;
break;
case 5:return 14;
break;
case 6:return 15;
break;
case 7:return 9;
break;
case 8:return 13;
break;
case 9:return 46;
break;
case 10:return 19;
break;
case 11:return 21;
break;
case 12:return 22;
break;
case 13:return 23;
break;
case 14:return 25;
break;
case 15:return 27;
break;
case 16:return 29;
break;
case 17:return 30;
break;
case 18:return 31;
break;
case 19:return 34;
break;
case 20:return 36;
break;
case 21:return 37;
break;
case 22:return 38;
break;
case 23:return 40;
break;
case 24:return 41;
break;
case 25:return 42;
break;
case 26:return 43;
break;
case 27:return 44;
break;
case 28:return 45;
break;
case 29:return 47;
break;
case 30:return 48;
break;
case 31:return 49;
break;
case 32:return 51;
break;
case 33:return 57;
break;
case 34:return 65;
break;
case 35:return 69;
break;
case 36:return 58;
break;
case 37:return 60;
break;
case 38:return 62;
break;
case 39:return 63;
break;
case 40:return 66;
break;
case 41:return 67;
break;
case 42:return 56;
break;
case 43:return 64;
break;
case 44:return 70;
break;
case 45:return 52;
break;
case 46:return 68;
break;
case 47:return 55;
break;
case 48:return 54
break;
case 49:return 53;
break;
case 50:return 7;
break;
case 51:return 5;
break;
}
},
rules: [/^(?:if\b)/,/^(?:do\b)/,/^(?:else\b)/,/^(?:endif\b)/,/^(?:repeat\b)/,/^(?:done\b)/,/^(?:stop repeat\b)/,/^(?:then\b)/,/^(?:until\b)/,/^(?:dig forward\b)/,/^(?:dig\b)/,/^(?:move to\b)/,/^(?:move\b)/,/^(?:pos\b)/,/^(?:look for block\b)/,/^(?:look for entity\b)/,/^(?:stop move to\b)/,/^(?:list\b)/,/^(?:toss\b)/,/^(?:equip\b)/,/^(?:unequip\b)/,/^(?:look at\b)/,/^(?:say\b)/,/^(?:wait\b)/,/^(?:activate item\b)/,/^(?:deactivate item\b)/,/^(?:build\b)/,/^(?:craft\b)/,/^(?:jump\b)/,/^(?:attack\b)/,/^(?:shoot\b)/,/^(?:get\b)/,/^(?:follow\b)/,/^(?:player\b)/,/^(?:nearest reachable position\b)/,/^(?:nearest block\b)/,/^(?:nearest mob\b)/,/^(?:nearest object\b)/,/^(?:nearest reachable mob\b)/,/^(?:nearest reachable object\b)/,/^(?:entity\b)/,/^(?:block\b)/,/^(?:me\b)/,/^(?:\*)/,/^(?:at\b)/,/^(?:up\b)/,/^(?:r?-?[0-9]+(?:\.[0-9]+)?,-?[0-9]+(?:\.[0-9]+)?,-?[0-9]+(?:\.[0-9]+)?)/,/^(?:\.)/,/^(?:[0-9]+)/,/^(?:[A-Za-z0-9,]+)/,/^(?: +)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}