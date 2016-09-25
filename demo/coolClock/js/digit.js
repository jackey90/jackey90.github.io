digit =
    [
        [
            [0,0,1,1,1,0,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,0,1,1,0],
            [0,0,1,1,1,0,0]
        ],//0
        [
            [0,0,0,1,1,0,0],
            [0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [1,1,1,1,1,1,1]
        ],//1
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,1,1],
            [1,1,1,1,1,1,1]
        ],//2
        [
            [1,1,1,1,1,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,1,0,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//3
        [
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,0],
            [0,0,1,1,1,1,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,1,1,0],
            [1,1,1,1,1,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,1]
        ],//4
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,1,1,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//5
        [
            [0,0,0,0,1,1,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//6
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0]
        ],//7
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//8
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,1,1,0,0,0,0]
        ],//9
        [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]//:
    ];

var REDIUS = 8;

function drawDigit(x,y,num,color, ctx){
    var matrix = digit[num];
    for(var i = 0; i < matrix.length; i++){
        var row = matrix[i];
        console.log(row);
        for(var j = 0; j < row.length; j++){
            var dig = row[j];
            if(dig == 1){
                ctx.beginPath();
                ctx.arc(x + 2* j * REDIUS + j,y + 2* i * REDIUS + i,REDIUS,0,2*Math.PI );
                ctx.closePath();
                ctx.fillStyle = color;
                ctx.fill();
            }
        }
    }

};

function addBalls(x,y,num){
    var matrix = digit[num];
    for(var i = 0; i < matrix.length; i++){
        var row = matrix[i];
        console.log(row);
        for(var j = 0; j < row.length; j++){
            var dig = row[j];
            if(dig == 1){
                var ball = {

                }
            }
        }
    }
}




function drawDate(ctx){
    ctx.clearRect(0,0,1200,800);
    var Today=new Date();
    var offset = 0;
    var size = 16;

    var currentHour = Today.getHours();
    var currentMinutes = Today.getMinutes();
    var currentSeconds = Today.getSeconds();

    Today.setSeconds(currentSeconds + 1);
    var nextHour = Today.getHours();
    var nextMinutes = Today.getMinutes();
    var nextSeconds = Today.getSeconds();

    dateChange(currentHour,nextHour,0);
    dateChange(currentMinutes,nextMinutes,3);
    dateChange(currentSeconds,nextSeconds,6);


    drawDigit(100 + (0 *size * REDIUS),100, parseInt(currentHour/10),'blue',ctx);
    drawDigit(100 + (1 *size * REDIUS),100, currentHour%10,'blue',ctx);
    drawDigit(100 + (2 *size * REDIUS),100, 10,'blue',ctx);
    drawDigit(100 + (3 *size * REDIUS),100, parseInt(currentMinutes/10),'blue',ctx);
    drawDigit(100 + (4 *size * REDIUS),100, currentMinutes%10,'blue',ctx);
    drawDigit(100 + (5 *size * REDIUS),100, 10,'blue',ctx);
    drawDigit(100 + (6 *size * REDIUS),100, parseInt(currentSeconds/10),'blue',ctx);
    drawDigit(100 + (7 *size * REDIUS),100, currentSeconds%10,'blue',ctx);

}

function dateChange(current, next, pos){
    var size = 16;
    if(parseInt(current/10) != parseInt(next/10)){
        addBalls(100 + (pos *size * REDIUS),100,next/10);
    }
    if(current%10 != next%10){
        addBalls(100 + ((pos+1) *size * REDIUS),100,next%10);
    }
}
