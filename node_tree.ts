export class NodeTree {
    private data: number;
    private father!: NodeTree; // Usar ! para indicar que sera inicializado
    private leftChild!: NodeTree; // Usar ! para indicar que sera inicializado
    private rightChild!: NodeTree; // Usar ! para indicar que sera inicializado

    constructor(data: number) {
        this.data = data;
        this.father = this; // Inicializa al padre a s mismo
        this.leftChild = this; // Inicializa al hijo izquierdo a si mismo
        this.rightChild = this; // Inicializa al hijo derecho a si mismo
    }

    public getData(): number {
        return this.data;
    }
    
    public setFather(newFather: NodeTree): void {
        this.father = newFather;
    }

    public getFather(): NodeTree {
        return this.father;
    }

    public setLeftChild(newChild: NodeTree): void {
        this.leftChild = newChild;
    }

    public getLeftChild(): NodeTree {
        return this.leftChild;
    }

    public setRightChild(newChild: NodeTree): void {
        this.rightChild = newChild;
    }

    public getRightChild(): NodeTree {
        return this.rightChild;
    }

    public isLeaf(): boolean {
        return this.leftChild === this && this.rightChild === this; // Verifica si es un nodo hoja
    }
}
