function CppSpecification()
{
    this.BinaryOperators = [ "+", "-", "*", "/", "%",
                             "==", "<", ">", "<=", ">=", "!=", "&&", "||", 
                             "&", "|", "^",
                             "<<", ">>",
                             "=", 
                             "+=", "-=", "*=", "/=", "%=",
                             "&=", "|=", "^=",
                             "<<=", ">>="];
                         
    this.PrefixUnaryOperators = [ "!", "&", "*", "~", "+", "++", "--"];
    
    this.PostfixUnaryOperators = [ "+", "++", "--"];
}