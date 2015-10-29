(function(){
    'use strict'
    var URL = "https://pocfirepoly.firebaseio.com/comment-list";

    Polymer({
        is:"comment-list-item",
        properties:{
            img:String,
            name:String,
            comment:String,
            date_time:String,
            key:String
        },
        doDelete:function(){

            var ref = new Firebase(URL+"/"+this.key);
            var onComplete = function(error) {
                if (error) {
                    document.querySelector('#toolTipAddFaild').show();
                    console.log('Delete failed');
                } else {
                    document.querySelector('#toolTipDelete').show();
                    console.log('Delete succeeded');
                }
            };
            ref.remove(onComplete);
        },
        doEdit:function(){

            var ref = new Firebase(URL+"/"+this.key);
            ref.update({
                "name": this.name,
                "comment":this.comment
            });

            document.querySelector('#toolTip').show();
        }

    });
}());