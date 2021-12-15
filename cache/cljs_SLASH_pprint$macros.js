goog.provide('cljs.pprint$macros');
var ret__4785__auto___16075 = (function (){
cljs.pprint$macros.with_pretty_writer = (function cljs$pprint$macros$with_pretty_writer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16077 = arguments.length;
var i__4737__auto___16078 = (0);
while(true){
if((i__4737__auto___16078 < len__4736__auto___16077)){
args__4742__auto__.push((arguments[i__4737__auto___16078]));

var G__16081 = (i__4737__auto___16078 + (1));
i__4737__auto___16078 = G__16081;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.pprint$macros.with_pretty_writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.pprint$macros.with_pretty_writer.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,base_writer,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"base-writer__15392__auto__","base-writer__15392__auto__",1204499378,null),null,(1),null)),(new cljs.core.List(null,base_writer,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"new-writer__15393__auto__","new-writer__15393__auto__",1716408768,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","pretty-writer?","cljs.pprint/pretty-writer?",-2126032890,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"base-writer__15392__auto__","base-writer__15392__auto__",1204499378,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-writer__15393__auto__","new-writer__15393__auto__",1716408768,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","make-pretty-writer","cljs.pprint/make-pretty-writer",90762412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"base-writer__15392__auto__","base-writer__15392__auto__",1204499378,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","*print-right-margin*","cljs.pprint/*print-right-margin*",-56183119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","*print-miser-width*","cljs.pprint/*print-miser-width*",1588913450,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"base-writer__15392__auto__","base-writer__15392__auto__",1204499378,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","-ppflush","cljs.pprint/-ppflush",-1019520880,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.pprint$macros.with_pretty_writer.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.pprint$macros.with_pretty_writer.cljs$lang$applyTo = (function (seq15441){
var G__15446 = cljs.core.first(seq15441);
var seq15441__$1 = cljs.core.next(seq15441);
var G__15447 = cljs.core.first(seq15441__$1);
var seq15441__$2 = cljs.core.next(seq15441__$1);
var G__15448 = cljs.core.first(seq15441__$2);
var seq15441__$3 = cljs.core.next(seq15441__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15446,G__15447,G__15448,seq15441__$3);
}));

return null;
})()
;
(cljs.pprint$macros.with_pretty_writer.cljs$lang$macro = true);

var ret__4785__auto___16108 = /**
 * Get the value of the field a named by the argument (which should be a keyword).
 */
cljs.pprint$macros.getf = (function cljs$pprint$macros$getf(_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this","this",1028897902,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(cljs.pprint$macros.getf.cljs$lang$macro = true);

var ret__4785__auto___16114 = /**
 * Set the value of the field SYM to NEW-VAL
 */
cljs.pprint$macros.setf = (function cljs$pprint$macros$setf(_AMPERSAND_form,_AMPERSAND_env,sym,new_val){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this","this",1028897902,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,new_val,null,(1),null))], 0))));
});
(cljs.pprint$macros.setf.cljs$lang$macro = true);

var ret__4785__auto___16119 = (function (){
cljs.pprint$macros.deftype = (function cljs$pprint$macros$deftype(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16121 = arguments.length;
var i__4737__auto___16122 = (0);
while(true){
if((i__4737__auto___16122 < len__4736__auto___16121)){
args__4742__auto__.push((arguments[i__4737__auto___16122]));

var G__16123 = (i__4737__auto___16122 + (1));
i__4737__auto___16122 = G__16123;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.pprint$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.pprint$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_name,fields){
var name_str = cljs.core.name(type_name);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name),fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defrecord","cljs.core/defrecord",948295858,null),null,(1),null)),(new cljs.core.List(null,type_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),null,(1),null)),fields__$1)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn-","cljs.core/defn-",1764521227,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["make-",name_str].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(fields__$1),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_name),"."].join('')),null,(1),null)),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name_str),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields__$1], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn-","cljs.core/defn-",1764521227,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([name_str,"?"].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__15615__auto__","x__15615__auto__",-228731652,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__15615__auto__","x__15615__auto__",-228731652,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name_str),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.pprint$macros.deftype.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.pprint$macros.deftype.cljs$lang$applyTo = (function (seq15622){
var G__15624 = cljs.core.first(seq15622);
var seq15622__$1 = cljs.core.next(seq15622);
var G__15625 = cljs.core.first(seq15622__$1);
var seq15622__$2 = cljs.core.next(seq15622__$1);
var G__15626 = cljs.core.first(seq15622__$2);
var seq15622__$3 = cljs.core.next(seq15622__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15624,G__15625,G__15626,seq15622__$3);
}));

return null;
})()
;
(cljs.pprint$macros.deftype.cljs$lang$macro = true);

cljs.pprint$macros.parse_lb_options = (function cljs$pprint$macros$parse_lb_options(opts,body){
var body__$1 = body;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_((function (){var G__15736 = cljs.core.first(body__$1);
return (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(G__15736) : opts.call(null,G__15736));
})())){
var G__16163 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),body__$1);
var G__16164 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),body__$1));
body__$1 = G__16163;
acc = G__16164;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,acc),body__$1], null);
}
break;
}
});
var ret__4785__auto___16166 = (function (){
/**
 * Execute the body as a pretty printing logical block with output to *out* which
 *   must be a pretty printing writer. When used from pprint or cl-format, this can be
 *   assumed.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Before the body, the caller can optionally specify options: :prefix, :per-line-prefix
 *   and :suffix.
 */
cljs.pprint$macros.pprint_logical_block = (function cljs$pprint$macros$pprint_logical_block(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16167 = arguments.length;
var i__4737__auto___16168 = (0);
while(true){
if((i__4737__auto___16168 < len__4736__auto___16167)){
args__4742__auto__.push((arguments[i__4737__auto___16168]));

var G__16170 = (i__4737__auto___16168 + (1));
i__4737__auto___16168 = G__16170;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.pprint$macros.pprint_logical_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.pprint$macros.pprint_logical_block.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var vec__15770 = cljs.pprint$macros.parse_lb_options(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null], null), null),args);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15770,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15770,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","level-exceeded","cljs.pprint/level-exceeded",-1557018470,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-write","-write",1999625154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"#",null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","*current-level*","cljs.pprint/*current-level*",1299227592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","*current-level*","cljs.pprint/*current-level*",1299227592,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","*current-length*","cljs.pprint/*current-length*",-732560897,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","start-block","cljs.pprint/start-block",-270767114,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(options),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(options),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(options),null,(1),null))], 0)))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","end-block","cljs.pprint/end-block",-397543401,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.pprint$macros.pprint_logical_block.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.pprint$macros.pprint_logical_block.cljs$lang$applyTo = (function (seq15751){
var G__15752 = cljs.core.first(seq15751);
var seq15751__$1 = cljs.core.next(seq15751);
var G__15753 = cljs.core.first(seq15751__$1);
var seq15751__$2 = cljs.core.next(seq15751__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15752,G__15753,seq15751__$2);
}));

return null;
})()
;
(cljs.pprint$macros.pprint_logical_block.cljs$lang$macro = true);

cljs.pprint$macros.macroexpand = (function cljs$pprint$macros$macroexpand(env,form){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if((!((form__$1 === form_SINGLEQUOTE_)))){
var G__16193 = form_SINGLEQUOTE_;
var G__16194 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__16193;
form_SINGLEQUOTE_ = G__16194;
continue;
} else {
return form_SINGLEQUOTE_;
}
break;
}
});
cljs.pprint$macros.pll_mod_body = (function cljs$pprint$macros$pll_mod_body(env,var_sym,body){
var inner = (function cljs$pprint$macros$pll_mod_body_$_inner(form){
if(cljs.core.seq_QMARK_(form)){
var form__$1 = cljs.pprint$macros.macroexpand(env,form);
var pred__15836 = cljs.core._EQ_;
var expr__15837 = cljs.core.first(form__$1);
if(cljs.core.truth_((function (){var G__15843 = new cljs.core.Symbol(null,"loop*","loop*",615029416,null);
var G__15844 = expr__15837;
return (pred__15836.cljs$core$IFn$_invoke$arity$2 ? pred__15836.cljs$core$IFn$_invoke$arity$2(G__15843,G__15844) : pred__15836.call(null,G__15843,G__15844));
})())){
return form__$1;
} else {
if(cljs.core.truth_((function (){var G__15850 = new cljs.core.Symbol(null,"recur","recur",1202958259,null);
var G__15851 = expr__15837;
return (pred__15836.cljs$core$IFn$_invoke$arity$2 ? pred__15836.cljs$core$IFn$_invoke$arity$2(G__15850,G__15851) : pred__15836.call(null,G__15850,G__15851));
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,var_sym,null,(1),null))))),null,(1),null))))),cljs.core.rest(form__$1));
} else {
return clojure.walk.walk(cljs$pprint$macros$pll_mod_body_$_inner,cljs.core.identity,form__$1);
}
}
} else {
return form;
}
});
return clojure.walk.walk(inner,cljs.core.identity,body);
});
var ret__4785__auto___16196 = (function (){
/**
 * A version of loop that iterates at most *print-length* times. This is designed
 *   for use in pretty-printer dispatch functions.
 */
cljs.pprint$macros.print_length_loop = (function cljs$pprint$macros$print_length_loop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16197 = arguments.length;
var i__4737__auto___16198 = (0);
while(true){
if((i__4737__auto___16198 < len__4736__auto___16197)){
args__4742__auto__.push((arguments[i__4737__auto___16198]));

var G__16199 = (i__4737__auto___16198 + (1));
i__4737__auto___16198 = G__16199;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.pprint$macros.print_length_loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.pprint$macros.print_length_loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var count_var = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("length-count");
var mod_body = cljs.pprint$macros.pll_mod_body(_AMPERSAND_env,count_var,body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,count_var,(0),bindings),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-length*","cljs.core/*print-length*",-20766927,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,count_var,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-length*","cljs.core/*print-length*",-20766927,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),mod_body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-write","-write",1999625154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"...",null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.pprint$macros.print_length_loop.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.pprint$macros.print_length_loop.cljs$lang$applyTo = (function (seq15876){
var G__15877 = cljs.core.first(seq15876);
var seq15876__$1 = cljs.core.next(seq15876);
var G__15878 = cljs.core.first(seq15876__$1);
var seq15876__$2 = cljs.core.next(seq15876__$1);
var G__15879 = cljs.core.first(seq15876__$2);
var seq15876__$3 = cljs.core.next(seq15876__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15877,G__15878,G__15879,seq15876__$3);
}));

return null;
})()
;
(cljs.pprint$macros.print_length_loop.cljs$lang$macro = true);

cljs.pprint$macros.process_directive_table_element = (function cljs$pprint$macros$process_directive_table_element(p__15921){
var vec__15927 = p__15921;
var seq__15928 = cljs.core.seq(vec__15927);
var first__15929 = cljs.core.first(seq__15928);
var seq__15928__$1 = cljs.core.next(seq__15928);
var char$ = first__15929;
var first__15929__$1 = cljs.core.first(seq__15928__$1);
var seq__15928__$2 = cljs.core.next(seq__15928__$1);
var params = first__15929__$1;
var first__15929__$2 = cljs.core.first(seq__15928__$2);
var seq__15928__$3 = cljs.core.next(seq__15928__$2);
var flags = first__15929__$2;
var first__15929__$3 = cljs.core.first(seq__15928__$3);
var seq__15928__$4 = cljs.core.next(seq__15928__$3);
var bracket_info = first__15929__$3;
var generator_fn = seq__15928__$4;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [char$,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),char$,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),null,(1),null)),params))),new cljs.core.Keyword(null,"flags","flags",1775418075),flags,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),bracket_info,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null)),generator_fn)], null)], null);
});
var ret__4785__auto___16242 = (function (){
cljs.pprint$macros.defdirectives = (function cljs$pprint$macros$defdirectives(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16243 = arguments.length;
var i__4737__auto___16244 = (0);
while(true){
if((i__4737__auto___16244 < len__4736__auto___16243)){
args__4742__auto__.push((arguments[i__4737__auto___16244]));

var G__16246 = (i__4737__auto___16244 + (1));
i__4737__auto___16244 = G__16246;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.pprint$macros.defdirectives.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.pprint$macros.defdirectives.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,directives){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"directive-table","directive-table",-1558673742,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.pprint$macros.process_directive_table_element,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([directives], 0))))),null,(1),null))], 0))));
}));

(cljs.pprint$macros.defdirectives.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.pprint$macros.defdirectives.cljs$lang$applyTo = (function (seq15958){
var G__15959 = cljs.core.first(seq15958);
var seq15958__$1 = cljs.core.next(seq15958);
var G__15960 = cljs.core.first(seq15958__$1);
var seq15958__$2 = cljs.core.next(seq15958__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15959,G__15960,seq15958__$2);
}));

return null;
})()
;
(cljs.pprint$macros.defdirectives.cljs$lang$macro = true);

var ret__4785__auto___16254 = /**
 * Makes a function which can directly run format-in. The function is
 * fn [stream & args] ... and returns nil unless the stream is nil (meaning
 * output to a string) in which case it returns the resulting string.
 * 
 * format-in can be either a control string or a previously compiled format.
 */
cljs.pprint$macros.formatter = (function cljs$pprint$macros$formatter(_AMPERSAND_form,_AMPERSAND_env,format_in){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"format-in__15979__auto__","format-in__15979__auto__",-1460095377,null),null,(1),null)),(new cljs.core.List(null,format_in,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"my-c-c__15980__auto__","my-c-c__15980__auto__",-1059479298,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","cached-compile","cljs.pprint/cached-compile",194847165,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"my-e-f__15981__auto__","my-e-f__15981__auto__",1825388167,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","execute-format","cljs.pprint/execute-format",1971623147,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"my-i-n__15982__auto__","my-i-n__15982__auto__",342375576,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","init-navigator","cljs.pprint/init-navigator",1904204595,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cf__15983__auto__","cf__15983__auto__",600753614,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"format-in__15979__auto__","format-in__15979__auto__",-1460095377,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"my-c-c__15980__auto__","my-c-c__15980__auto__",-1059479298,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"format-in__15979__auto__","format-in__15979__auto__",-1460095377,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"format-in__15979__auto__","format-in__15979__auto__",-1460095377,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"stream__15987__auto__","stream__15987__auto__",-1542115639,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__15989__auto__","args__15989__auto__",85946341,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"navigator__15990__auto__","navigator__15990__auto__",839428783,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"my-i-n__15982__auto__","my-i-n__15982__auto__",342375576,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__15989__auto__","args__15989__auto__",85946341,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"my-e-f__15981__auto__","my-e-f__15981__auto__",1825388167,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"stream__15987__auto__","stream__15987__auto__",-1542115639,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"cf__15983__auto__","cf__15983__auto__",600753614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"navigator__15990__auto__","navigator__15990__auto__",839428783,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.pprint$macros.formatter.cljs$lang$macro = true);

var ret__4785__auto___16278 = /**
 * Makes a function which can directly run format-in. The function is
 * fn [& args] ... and returns nil. This version of the formatter macro is
 * designed to be used with *out* set to an appropriate Writer. In particular,
 * this is meant to be used as part of a pretty printer dispatch method.
 * 
 * format-in can be either a control string or a previously compiled format.
 */
cljs.pprint$macros.formatter_out = (function cljs$pprint$macros$formatter_out(_AMPERSAND_form,_AMPERSAND_env,format_in){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"format-in__16027__auto__","format-in__16027__auto__",-2018137018,null),null,(1),null)),(new cljs.core.List(null,format_in,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"cf__16028__auto__","cf__16028__auto__",-1017217874,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"format-in__16027__auto__","format-in__16027__auto__",-2018137018,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","cached-compile","cljs.pprint/cached-compile",194847165,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"format-in__16027__auto__","format-in__16027__auto__",-2018137018,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"format-in__16027__auto__","format-in__16027__auto__",-2018137018,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__16029__auto__","args__16029__auto__",-1111574690,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"navigator__16030__auto__","navigator__16030__auto__",-1552308342,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","init-navigator","cljs.pprint/init-navigator",1904204595,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__16029__auto__","args__16029__auto__",-1111574690,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","execute-format","cljs.pprint/execute-format",1971623147,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cf__16028__auto__","cf__16028__auto__",-1017217874,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"navigator__16030__auto__","navigator__16030__auto__",-1552308342,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.pprint$macros.formatter_out.cljs$lang$macro = true);

var ret__4785__auto___16301 = (function (){
/**
 * Execute body with the pretty print dispatch function bound to function.
 */
cljs.pprint$macros.with_pprint_dispatch = (function cljs$pprint$macros$with_pprint_dispatch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16303 = arguments.length;
var i__4737__auto___16304 = (0);
while(true){
if((i__4737__auto___16304 < len__4736__auto___16303)){
args__4742__auto__.push((arguments[i__4737__auto___16304]));

var G__16307 = (i__4737__auto___16304 + (1));
i__4737__auto___16304 = G__16307;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.pprint$macros.with_pprint_dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.pprint$macros.with_pprint_dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,function$,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","*print-pprint-dispatch*","cljs.pprint/*print-pprint-dispatch*",-1820734013,null),null,(1),null)),(new cljs.core.List(null,function$,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.pprint$macros.with_pprint_dispatch.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.pprint$macros.with_pprint_dispatch.cljs$lang$applyTo = (function (seq16058){
var G__16059 = cljs.core.first(seq16058);
var seq16058__$1 = cljs.core.next(seq16058);
var G__16060 = cljs.core.first(seq16058__$1);
var seq16058__$2 = cljs.core.next(seq16058__$1);
var G__16061 = cljs.core.first(seq16058__$2);
var seq16058__$3 = cljs.core.next(seq16058__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16059,G__16060,G__16061,seq16058__$3);
}));

return null;
})()
;
(cljs.pprint$macros.with_pprint_dispatch.cljs$lang$macro = true);

var ret__4785__auto___16312 = /**
 * A convenience macro that pretty prints the last thing output. This is
 * exactly equivalent to (pprint *1).
 */
cljs.pprint$macros.pp = (function cljs$pprint$macros$pp(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.pprint","pprint","cljs.pprint/pprint",-1547147237,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*1","cljs.core/*1",-1526381047,null),null,(1),null)))));
});
(cljs.pprint$macros.pp.cljs$lang$macro = true);


//# sourceMappingURL=cljs.pprint$macros.js.map
