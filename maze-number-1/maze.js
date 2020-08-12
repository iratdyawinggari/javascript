
    printMaze = function (arr) {
        var arrText = '';
        for (var i = 0; i < arr.length; i++) {
            
                for (var j = 0; j < arr.length; j++) {
                    arrText+=arr[i][j];
                }
                console.log(arrText);
                arrText='';
            ;
        }
    };

    spiralMaze = function (n) {
        var arr = new Array(n);
        for (var k = 0; k < arr.length; k++) { 
            arr[k] = []; 
        } 

        for (var i = 0; i < n; i++) {
        
            for (var j = 0; j < n; j++) {
                
                if (i % 4 === 0) {
                    if (j === 1) {
                        arr[i][j] = " ";
                    }
                    else {
                        arr[i][j] = "@";
                    }
                } else if (i % 4 === 2) {
                    if (j === n - 2) {
                        arr[i][j] = " ";
                    }
                    else {
                        arr[i][j] = "@";
                    }
                } else {
                    if (j === 0 || j === n - 1) {
                        arr[i][j] = "@";
                    }
                    else {
                        arr[i][j] = " ";
                    }
                };
            };
        }
        return arr;
    };

    printMaze(spiralMaze(15));