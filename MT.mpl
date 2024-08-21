MT := module() 
    description "Some useful tools";
    option package;
    export findA5x5;

    findA5x5 := proc(a1::algebraic,a2::algebraic,a3::algebraic,a4::algebraic,a5::algebraic,
                     b1::algebraic,b2::algebraic,b3::algebraic,b4::algebraic,b5::algebraic,
                     c1::algebraic,c2::algebraic,c3::algebraic,c4::algebraic,c5::algebraic,
                     d1::algebraic,d2::algebraic,d3::algebraic,d4::algebraic,d5::algebraic,
                     e1::algebraic,e2::algebraic,e3::algebraic,e4::algebraic,e5::algebraic, $)
        with(LinearAlgebra):t1:= {Eigenvalues(<<a1,a2,a3,a4,a5>|<b1,b2,b3,b4,b5>|<c1,c2,c3,c4,c5>|<d1,d2,d3,d4,d5>|<e1,e2,e3,e4,e5>>)[1],Eigenvalues(<<a1,a2,a3,a4,a5>|<b1,b2,b3,b4,b5>|<c1,c2,c3,c4,c5>|<d1,d2,d3,d4,d5>|<e1,e2,e3,e4,e5>>)[2],Eigenvalues(<<a1,a2,a3,a4,a5>|<b1,b2,b3,b4,b5>|<c1,c2,c3,c4,c5>|<d1,d2,d3,d4,d5>|<e1,e2,e3,e4,e5>>)[3],Eigenvalues(<<a1,a2,a3,a4,a5>|<b1,b2,b3,b4,b5>|<c1,c2,c3,c4,c5>|<d1,d2,d3,d4,d5>|<e1,e2,e3,e4,e5>>)[4],Eigenvalues(<<a1,a2,a3,a4,a5>|<b1,b2,b3,b4,b5>|<c1,c2,c3,c4,c5>|<d1,d2,d3,d4,d5>|<e1,e2,e3,e4,e5>>)[5]};
        return t1;
    end proc;

end module