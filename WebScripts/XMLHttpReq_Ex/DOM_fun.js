function TextFind(node,str){
    if(node.nodeType==document.ELEMENT_NODE){
        for(var i=0; i<node.childNodes.length; i++){
            if(TextFind(node.childNodes[i],str))
                return true;
        }
        return false;
    }else if(node.nodeType==document.TEXT_NODE){
        return node.nodeValue.indexOf(str)>-1;
    }
}
TextFind(document.body,"am");