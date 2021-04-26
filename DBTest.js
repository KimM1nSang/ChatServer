const mysql = require("mysql2/promise");

const s = require("./secret");

const connPool = mysql.createPool(s);

async function test(email,pass)
{
    let con = await connPool.getConnection();//연결을 하나 가져온다.
    let result = await con.query(`SELECT email FROM users WHERE email = ? AND password = PASSWORD(?)`,[email,pass]);
    if(result[0].length >= 1)
    {
        console.log("로그인 성공");
    }
    else
    {
        console.log("로그인 실패");
    }
    con.release();
}

test("minsang1008@naver.com","0258");