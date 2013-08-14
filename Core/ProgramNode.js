/**
 * A program node represents a single program, which contains a list of global nodes, which,
 * depending on the language, can be used for variables, functions, namespaces, and classes.
 * 
 * @returns {ProgramNode} Returns a new Programe node.
 */
function ProgramNode()
{
    /**
     * A list of AST nodes that represent the highest global nodes within the program.
     * 
     * @type Array
     */
    this.Globals = { };

    
    /**
     * Adds a new global program node to the program.
     * 
     * @param {ASTNode} node - The node to add.
     */
    this.AddGlobal = function(node)
    {
        this.Globals[this.Globals.length] = node;
        
        node.SetProgram(this);
    }
}