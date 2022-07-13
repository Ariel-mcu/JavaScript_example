1. var | let | const
    (1) scope
        for(var i = 0; i < 5; i++){
            console.log(i)
        }
        console.log(i)

        output:
        0
        1
        2
        3
        4
        5
        --------------------------
        for(let j = 0; j < 5; j++){
            console.log(j)
        }
        console.log(j);  // 讀不到 j

        output:
        0
        1
        2
        3
        4
        j is not defined

    (2) hosting
        temp();   // 先呼叫函數
        function temp(){.....}   // 補宣告
        ---------------------------------
        test += 1;
        var test = 10;
        ---------------------------------
        let 和 const 不能先執行，再宣告

    (3) const 宣告過的變數不能被 reassigned
        const d = 1;
        d = 100;  // 不行。TypeError: Assignment to constant variable.
        ---------------------------------
        const e = {
            x: 5,
            y: 10,
            z: 15,
        };

        e.x = 100; // 可以

        執行: e
        結果: {x: 100, y: 10, z: 15}

2. object shorthand 物件縮寫

3. destructuring assignment 解構賦值

4. string template 字串模板(使用反引號 backtick)
    (1) 字串串接
    function sayHello(name){
        console.log('Hello, ' + name);
    }

    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    function sayHello(name){
        console.log(`Hello, ${name}`);
    }

    執行: sayHello('Peter');
    結果: Hello, Peter

    執行: sayHello('Sally');
    結果: Hello, Sally

    (2) 插入表達式
        statement(敘述 | 陳述式)和 expression(條件判斷 | 表達式)
        - statement (陳述式)
            while(){}
            for(){}
            if(){}
            if(){}else{}
            break;
            continue;

        - expression (表達式)
            num
            5 > 3
            5 + 3
            n > a + b

        function sayHello(name, days){
            // let mintues = days * 24 * 60
            // console.log(`Hello, ${name}! It has been ${mintues} mintues.`);
            console.log(`Hello, ${name}! It has been ${days * 24 * 60} mintues.`);
        }
        執行: sayHello('Peter',3);
        結果: Hello, Peter! It has been 4320 mintues.

        ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 

        function sayHello(name, days){
            console.log(`Hello, ${name}! ${(days > 3) ? 'It has been a long time since I saw you last.': ''}`);
        }
        執行: sayHello('Peter',3);
        結果: Hello, Peter! 

        執行: sayHello('Peter',5);
        結果: Hello, Peter! It has been a long time since I saw you last.

    (3) 多行字串
        let longString = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' + 
        'Aspernatur nesciunt quas dolor inventore eos libero ipsa ducimus!  ' + 
        'Incidunt distinctio culpa sequi hic eaque excepturi tempore, sed odit ' + 
        'dicta perspiciatis sunt delectus eum, sint ratione, facere fuga dolorum ' + 
        'aliquid nihil eveniet consectetur ab. Quas reprehenderit ut doloremque nesciunt labore? ' + 
        'Ducimus quis molestias itaque quasi, est praesentium voluptatibus magni nesciunt atque, ' + 
        'pariatur vero aliquid, reprehenderit illum dolores tempore temporibus. ' + 
        'Rerum vel ipsum nostrum sequi quo facere, commodi praesentium possimus mollitia ' + 
        'sapiente exercitationem! Expedita dignissimos dolorum quaerat quibusdam animi explicabo odio, ' + 
        'possimus reprehenderit necessitatibus doloribus repellat vero magni, adipisci quasi iure pariatur soluta.'
        
        
        ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
        
        let longString = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aspernatur nesciunt quas dolor inventore eos libero ipsa ducimus! Incidunt 
        distinctio culpa sequi hic eaque excepturi tempore, sed odit dicta perspiciatis 
        sunt delectus eum, sint ratione, facere fuga dolorum aliquid nihil eveniet consectetur ab. 
        Quas reprehenderit ut doloremque nesciunt labore? Ducimus quis molestias itaque quasi, 
        est praesentium voluptatibus magni nesciunt atque, pariatur vero aliquid, reprehenderit 
        illum dolores tempore temporibus. Rerum vel ipsum nostrum sequi quo facere, commodi 
        praesentium possimus mollitia sapiente exercitationem! Expedita dignissimos dolorum 
        quaerat quibusdam animi explicabo odio, possimus reprehenderit necessitatibus doloribus 
        repellat vero magni, adipisci quasi iure pariatur soluta.`

5. arrow function 箭頭函數(使用更簡短的宣告和定義函數的方式)
    // ES5
    let ans = function(x){
        return x * 2;
    }

    // ES6
    let ans = (x) => {
        return x * 2;
    }
    ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ 
    let ans = x => x * 2


6. spread operator
7. class (自訂物件)
8. inheritance (繼承關係)