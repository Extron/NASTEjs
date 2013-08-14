/**
 * A data class that contains data on the current language being utilized by the program.
 * This contains data on operators, format, and correct syntax.
 * 
 * @returns {LanguageSpecification} Returns a new language specification.
 */
function LanguageSpecification()
{
    /**
     * Contains a list of valid binary operators that the language supports.
     * 
     * @type Array
     */
    this.BinaryOperators = { };
    
    /**
     * Contains a list of valid prefix unary operators that the language supports.
     * 
     * @type Array
     */
    this.PrefixUnaryOperators = { };
    
    /**
     * Contains a list of valid postfix unary operators that the language supports.
     * 
     * @type Array
     */
    this.PostfixUnaryOperators = { };
}