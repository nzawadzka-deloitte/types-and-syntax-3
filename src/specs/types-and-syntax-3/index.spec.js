describe('coercion - types and syntax - 3', () => {
    test('my custom add function', function(){
        function Add(a,b){
            return a + b;
        }

        expect(Add(2,5)).toEqual(7)
    })
    test('explicit coercion', function(){
        let a = 42, b = 0, c = true, d = undefined, e = "John Lennon", f = [1,2,3], g = {name: "John"};

        expect(typeof String(a)).toEqual( "string");
        expect(typeof Boolean(a)).toEqual(  "boolean" );
        
        expect(typeof Number(a)).toEqual( "number" );

        expect(typeof String(b)).toEqual( "string" );
        expect(typeof Boolean(b)).toEqual( "boolean" );
        expect(typeof Number(b)).toEqual( "number" );

        expect(typeof String(c)).toEqual( "string" );
        expect(typeof Boolean(c)).toEqual( "boolean");
        expect(typeof Number(c)).toEqual( "number" );

        expect(typeof String(d)).toEqual( "string");
        expect(typeof Boolean(d)).toEqual( "boolean" );
        expect(typeof Number(d)).toEqual( "number" );

        expect(typeof String(e)).toEqual( "string" );
        expect(typeof Boolean(e)).toEqual( "boolean" );
        expect(typeof Number(e)).toEqual( "number");

        expect(typeof String(f)).toEqual( "string" );
        expect(typeof Boolean(f)).toEqual( "boolean" );
        expect(typeof Number(f)).toEqual( "number" );

        expect(typeof String(g)).toEqual( "string" );
        expect(typeof Boolean(g)).toEqual( "boolean" );
        expect(typeof Number(g)).toEqual( "number" );
        
    });
    test('implicit coercion', function(){
        expect(4 * "5").toEqual( 20 );
        expect(3 + "5" + 1).toEqual( "351" );
        expect("42" + 5).toEqual("425"  );
        expect(true + true).toEqual( 2 );
        expect("John" ? 4 : 1).toEqual( 4 );
        expect(undefined ? 4 : 1).toEqual( 1 );
        expect(1 + 2 + "1").toEqual( "31");
        expect((1 + "2") + 1).toEqual( "121");
        expect(4 * "Lennon").toEqual( NaN );
    });
})

describe('arithmetic operators - types and syntax - 3', () => {
    let a, b = 23;

    beforeEach(function(){
        a = 10;
    })

    test('prefixed incrementation', function(){
        function Add(){
            return ++a;
        }

        expect(Add(a)).toEqual( 11 );
    });

    test('suffixed incrementation', function(){
        function Add(){
            return a++;
        }

        expect(Add(a)).toEqual( 10 );
    });

    test('prefixed decrementation', function(){
        function Dec(){
            return --a;
        }

        expect(Dec(a)).toEqual( 9 );
    });

    test('suffixed decrementation', function(){
        function Dec(){
            return a--;
        }

        expect(Dec(a)).toEqual( 10 );
    });

    test('modulo', function(){
        expect(a % 2).toEqual( /* YOUR ANSWER HERE */ );
        expect(b % 2).toEqual( /* YOUR ANSWER HERE */ );
        expect(a % b).toEqual( /* YOUR ANSWER HERE */ );
        expect(b % a).toEqual( /* YOUR ANSWER HERE */ );
    });
})

describe('comparison operators - types and syntax - 3', () => {
    let a = "23", b = 23, c = 0, d = false, e = undefined;

    test('loose equality', function(){
        expect(a == b).toEqual( /* YOUR ANSWER HERE */ );
        expect(b == c).toEqual( /* YOUR ANSWER HERE */ );
        expect(c == d).toEqual( /* YOUR ANSWER HERE */ );
        expect(d == e).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('strict equality', function(){
        expect(a === b).toEqual( /* YOUR ANSWER HERE */ );
        expect(b === c).toEqual( /* YOUR ANSWER HERE */ );
        expect(c === d).toEqual( /* YOUR ANSWER HERE */ );
        expect(d === e).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('ternary operator (elvis)', function(){
        function Add(a, b){
            return a + b;
        }

        function Dec(a, b){
            return a - b;
        }

        expect(a ? true : false).toEqual( /* YOUR ANSWER HERE */ );
        expect(b ? true : false).toEqual( /* YOUR ANSWER HERE */ );
        expect(c ? true : false).toEqual( /* YOUR ANSWER HERE */ );
        expect(d ? true : false).toEqual( /* YOUR ANSWER HERE */ );

        expect(Add(5,10) > 10 ? true : false).toEqual( /* YOUR ANSWER HERE */ );
        expect(Dec(5,10) > 10 ? true : false).toEqual( /* YOUR ANSWER HERE */ );
        expect(Add(3,2) > 10 ? true : false).toEqual( /* YOUR ANSWER HERE */ );
        expect(Dec(3,2) > 10 ? true : false).toEqual( /* YOUR ANSWER HERE */ );
    });
})

describe('logical operators - types and syntax - 3', () => {
    let a = "38", b = 38, c = 0, d = false, e = undefined;

    test('logical or', function(){
        expect(a || b).toEqual( /* YOUR ANSWER HERE */ );
        expect(b || c).toEqual( /* YOUR ANSWER HERE */ );
        expect(c || d).toEqual( /* YOUR ANSWER HERE */ );
        expect(d || e).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('logical and', function(){
        expect(a && b).toEqual( /* YOUR ANSWER HERE */ );
        expect(b && c).toEqual( /* YOUR ANSWER HERE */ );
        expect(c && d).toEqual( /* YOUR ANSWER HERE */ );
        expect(d && e).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('combined expressions', function(){
        expect(a || b || c).toEqual( /* YOUR ANSWER HERE */ );
        expect(b || c && d).toEqual( /* YOUR ANSWER HERE */ );
        expect(c && d && e).toEqual( /* YOUR ANSWER HERE */ );
        expect((d || e) && c || (a || b)).toEqual( /* YOUR ANSWER HERE */ );
    });
})
