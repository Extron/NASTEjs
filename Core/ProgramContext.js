/**
 * Stores a single program context, which points to the program and stores any meta data for the program.
 * 
 * @returns {ProgramContext} Returns a new program context.
 */
function ProgramContext()
{
    this.Program = null;
    this.Specification = null;
    this.NodeBuilder = null;
    this.Parser = null;
}