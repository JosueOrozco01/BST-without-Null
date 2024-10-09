import { NodeTree } from "./node_tree";

class BST {
    private root!: NodeTree;

    constructor() {
        this.root = new NodeTree(0); // Inicializa la raiz con un nodo
    }

    public insert(data: number): void {
        let newNode: NodeTree = new NodeTree(data);
        let parent!: NodeTree;

        // Si el arbol esta vacio, establecemos el nuevo nodo como raiz
        if (this.root.isLeaf()) {
            this.root = newNode;
            return;
        }

        let current: NodeTree = this.root;

        while (true) {
            parent = current;

            if (newNode.getData() < current.getData()) {
                if (current.getLeftChild() === current) { // Verifica si no tiene hijo izquierdo
                    parent.setLeftChild(newNode);
                    newNode.setFather(parent);
                    break;
                } else {
                    current = current.getLeftChild();
                }
            } else {
                if (current.getRightChild() === current) { // Verifica si no tiene hijo derecho
                    parent.setRightChild(newNode);
                    newNode.setFather(parent);
                    break;
                } else {
                    current = current.getRightChild();
                }
            }
        }
    }

    public search(dataToSearch: number): boolean {
        let current: NodeTree = this.root;

        while (true) {
            if (current.isLeaf()) 
                return false; // Si llegamos a un nodo hoja, el dato no existe
            if (current.getData() === dataToSearch) {
                return true; // Dato encontrado
            } else if (dataToSearch < current.getData()) {
                current = current.getLeftChild();
            } else {
                current = current.getRightChild();
            }
        }
    }

    private printNode(nodo: NodeTree): void {
        if (!nodo.isLeaf()) {
            this.printNode(nodo.getLeftChild());
            console.log(nodo.getData());
            this.printNode(nodo.getRightChild());
        }
    }

    public printAll(): void {
        this.printNode(this.root);
    }
}

// main
let myBinarySearchTree: BST = new BST(); 
myBinarySearchTree.insert(10);
myBinarySearchTree.insert(7);
myBinarySearchTree.insert(100);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(38);

if (myBinarySearchTree.search(10)) {
    console.log("Dato encontrado");
} else {
    console.log("El dato no existe");
}

myBinarySearchTree.printAll();
