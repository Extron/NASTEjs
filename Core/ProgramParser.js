function Parser()
{
    /**
     * Parses a code text document into a set of global abstract syntax trees.
     * 
     * @param {File} file - The file to parse code from.
     * @returns {Array} Returns a list of global nodes for the program.
     */
    this.Parse = function(file) { return { } }
    
    
    /**
     * Converts a set of global nodes within a program into a set of text documents containing
     * code for the program.
     * 
     * @param {Array} globals - A list of global nodes that make up the program.
     */
    this.DeParse = function(globals) { }
}