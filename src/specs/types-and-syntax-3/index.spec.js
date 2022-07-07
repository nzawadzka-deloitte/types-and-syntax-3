describe('coercion - types and syntax - 3', () => {
    test('my custom add function', function(){
        function Add(a,b){
            return a + b;
        }

        expect(Add(2,5)).toEqual(7)
    })
    test('explicit coercion', function(){
        let a = 42, b = 0, c = true, d = undefined, e = "John Lennon", f = [1,2,3], g = {name: "John"};

        expect(typeof String(a)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Boolean(a)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Number(a)).toEqual( /* YOUR ANSWER HERE */ );

        expect(typeof String(b)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Boolean(b)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Number(b)).toEqual( /* YOUR ANSWER HERE */ );

        expect(typeof String(c)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Boolean(c)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Number(c)).toEqual( /* YOUR ANSWER HERE */ );

        expect(typeof String(d)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Boolean(d)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Number(d)).toEqual( /* YOUR ANSWER HERE */ );

        expect(typeof String(e)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Boolean(e)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Number(e)).toEqual( /* YOUR ANSWER HERE */ );

        expect(typeof String(f)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Boolean(f)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Number(f)).toEqual( /* YOUR ANSWER HERE */ );

        expect(typeof String(g)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Boolean(g)).toEqual( /* YOUR ANSWER HERE */ );
        expect(typeof Number(g)).toEqual( /* YOUR ANSWER HERE */ );
    });
    test('implicit coercion', function(){
        expect(4 * "5").toEqual( /* YOUR ANSWER HERE */ );
        expect(3 + "5" + 1).toEqual( /* YOUR ANSWER HERE */ );
        expect("42" + 5).toEqual( /* YOUR ANSWER HERE */ );
        expect(true + true).toEqual( /* YOUR ANSWER HERE */ );
        expect("John" ? 4 : 1).toEqual( /* YOUR ANSWER HERE */ );
        expect(undefined ? 4 : 1).toEqual( /* YOUR ANSWER HERE */ );
        expect(1 + 2 + "1").toEqual( /* YOUR ANSWER HERE */ );
        expect((1 + "2") + 1).toEqual( /* YOUR ANSWER HERE */ );
        expect(4 * "Lennon").toEqual( /* YOUR ANSWER HERE */ );
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

        expect(Add(a)).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('suffixed incrementation', function(){
        function Add(){
            return a++;
        }

        expect(Add(a)).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('prefixed decrementation', function(){
        function Dec(){
            return --a;
        }

        expect(Dec(a)).toEqual( /* YOUR ANSWER HERE */ );
    });

    test('suffixed decrementation', function(){
        function Dec(){
            return a--;
        }

        expect(Dec(a)).toEqual( /* YOUR ANSWER HERE */ );
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
