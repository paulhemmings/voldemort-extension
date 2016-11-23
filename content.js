var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text
                                .replace(/Donald Trump|Donald J. Trump/gi, 'Voldemort')
                                .replace(/Melania Trump/gi, 'Wife of Voldemort')
                                .replace(/Trump/gi, 'Voldemort')

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
