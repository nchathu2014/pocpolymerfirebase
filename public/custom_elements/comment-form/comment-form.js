(function(){
    'use strict'
    var ref = new Firebase("https://pocfirepoly.firebaseio.com/comment-list");

    Polymer({
        is:"comment-form",

        properties:{
            name:String,
            comment:String,
            date:{
                type:String,
                computed:'getDate()'
            },
            img:String
        },
        getDate :function(){

            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();

            if(dd<10) {
                dd='0'+dd
            }
            if(mm<10) {
                mm='0'+mm
            }
            today = mm+'/'+dd+'/'+yyyy;
            return today;
        },
        sumbitComment: function() {

            var _name =   document.querySelector('#name').value.trim();
            var _comment = document.querySelector('#comment').value.trim();
            var _date = document.querySelector('#date').value;

            if(_name==="" || _comment===""){
                document.querySelector('#errTip').show();
            }else{
                // RANDOM IMAGE AND GENDER GENERATING
                var imgNo = Math.floor(Math.random() * (97)) + 1;//for image number randomly
                var gendeValue = imgNo%2//for selecting gender  randomly
                var gender=null;

                (gendeValue===0)?(gender="women"):(gender="men");

                var imgUrl="https://randomuser.me/api/portraits/thumb/"+gender+"/"+imgNo+".jpg";
                // var imgUrl="https://randomuser.me/api/portraits/thumb/men/10.jpg";
                ref.push({
                    "comment":_comment,
                    "datetime":_date,
                    "name":_name,
                    "img":imgUrl
                });
                document.querySelector('#toolTipAdd').show();
                var _name =  document.querySelector('#name').value="";
                var _comment = document.querySelector('#comment').value="";
            }

        }
    });

}());