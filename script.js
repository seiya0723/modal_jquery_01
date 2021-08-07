window.addEventListener("load" , function (){

    //モーダルダイアログの表示ボタンが押されたときの処理
    $("#btn_open").on('click', function() {
        $('#modal').show();
    });


    //モーダルの終了ボタンが押された時の処理
    $(".btn_close").on('click', function() {
        $('#modal').hide();
    });






    //モーダルの領域外が押されたときの処理
    /*
    //eventにはクリックされた要素が格納される
    $('#modal').on('click', function(event) {


        //#modalがクリックされた時、クリック位置が#modal_contentではない時、モーダルを非表示にする。
        if(!($(event.target).closest($('#modal_content')).length)){
            $('#modal').hide();
        }

        //参照:https://qiita.com/mabots/items/74c21ebcedf0004f7fb5
    });

    

    //こんなふうにイベントハンドラを作ることができる。
    $("#onevent").on({
        "mouseenter":function() {
            console.log("入った");
        },
        "mouseleave":function() {
            console.log("離れた");
        },
        "click":function(){
            console.log("クリック");
        },
        "dblclick":function(){
            console.log("ダブルクリック");
        },
        "mousedown":function(){
            console.log("マウスダウン");
        },
        "mouseup":function(){
            console.log("マウスアップ");
        },
        "contextmenu":function(){
            console.log("コンテキストメニュー");
        }
    });
    */

});

