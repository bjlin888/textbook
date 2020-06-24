var ops = [],
    cursor = db.getCollection('user_msg_log').find({"create_time": {"$not": {"$type": 10 }}});
cursor.forEach(function (errors, doc) {

        var d = new Date();
        d.setTime(doc.create_time);
    ops.push({ 
        "updateOne": { 
            "filter": { "_id": doc._id } ,              
            "update": { "$set": { "crt_date": d } } 
        }         
    });

    if (ops.length === 1000) {
        db.getCollection('user_msg_log').bulkWrite(ops);
        ops = [];
    }     
});
if (ops.length > 0) db.getCollection('user_msg_log').bulkWrite(ops);

// redirect to new collection
var pipeline = [ {$out: 'rpt_conversation_log'} ];
db.getCollection('user_msg_log').aggregate(pipeline);