/** 
 * ASTNode - This class represents the base class for an abstract syntax tree node.  
 */


function ASTNode()
{
    /**
     * The parent node of this node.
     * 
     * @type ASTNode
     */
    this.Parent = null;
    
    /**
     * The parent program that contains this node.
     * 
     * @type ProgramNode
     */
    this.Program = null;
    
    /**
     * A list of child nodes of this node.
     * 
     * @type Array
     */
    this.Children = { };
    
    
    
    /**
     * Recursively sets the parent program node of this node and all of its children.
     * 
     * @param {ProgramNode} program
     */
    this.SetProgram = function(program)
    {
        this.Program = program;
        
        for (var child in this.Children)
        {
            child.SetProgram(program);
        }
    }
    
    
    /**
     * Takes a line whose highest level node corresponds to this node and generates
     * a set of children from it.
     * 
     * @param {String} line - The string of code to parse into childen.
     */
    this.Parse = function(line) { }
    
    /**
     * Converts this node into a string of code.
     * 
     * @returns {String} Returns a string that represents the node.
     */
    this.DeParse = function() { return ""; }
}