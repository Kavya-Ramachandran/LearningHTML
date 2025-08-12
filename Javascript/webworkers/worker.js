self.onmessage = (event) => {
    const count = event.data;
    const list=[];
    for (let index = 0; index < count; index++) {
        list.push(`Items ${index}`)
    }
    self.postMessage(list)
}

